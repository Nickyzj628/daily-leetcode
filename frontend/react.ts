import htm from "htm/mini";

type HookAction<T> = (newState: T) => T;

type Hook<T> = {
  state: T;
  queue: HookAction<T>[];
};

type Fiber = {
  effectTag?: EFFECT_TAG;

  type: string | Function;
  props: Record<string, any>;
  dom?: HTMLElement | Text;

  alternate?: Fiber | null;
  parent?: Fiber | null;
  sibling?: Fiber | null;
  child?: Fiber | null;
  hooks?: Hook<any>[];
};

enum EFFECT_TAG {
  PLACEMENT = "PLACEMENT",
  UPDATE = "UPDATE",
  DELETION = "DELETION",
};

const TEXT_ELEMENT_TYPE = "text";

let currentRoot: Fiber | null = null;
let wipRoot: Fiber | null = null;
let nextUnitOfWork: Fiber | null = null;
let deletions: Fiber[] = [];

let wipFiber: Fiber | null = null;
let hookIndex = 0;

const isEvent = (key: string) => key.startsWith("on");
const isProperty = (key: string) => key !== "children" && !isEvent(key);
const isNewProperty = (prevProps: Fiber["props"], nextProps: Fiber["props"], key: string) => prevProps[key] !== nextProps[key];
const isGoneProperty = (prevProps: Fiber["props"], nextProps: Fiber["props"], key: string) => !(key in nextProps);

// 兼容safari
const doWorkLoop = requestIdleCallback ?? requestAnimationFrame;

const createTextElement = (text: string) => ({
  type: TEXT_ELEMENT_TYPE,
  props: {
    nodeValue: text,
    children: [],
  },
});

export const createElement = (type: Fiber["type"], props: Fiber["props"], ...children: Fiber[]) => ({
  type,
  props: {
    ...props,
    children: children.map((child) => (
      typeof child === "object" ? child : createTextElement(child)
    )),
  },
});

// TODO: 自己实现
export const html = htm.bind(createElement);

export const render = (children: Fiber | Fiber[], parentDOM: HTMLElement) => {
  wipRoot = {
    dom: parentDOM,
    type: parentDOM.tagName.toLowerCase(),
    props: {
      children: Array.isArray(children) ? children : [children],
    },
    alternate: currentRoot,
  };
  nextUnitOfWork = wipRoot;
  deletions = [];
};

export const useState = <T>(initial: T): [T, (action: HookAction<T>) => void] => {
  const oldHook = wipFiber?.alternate?.hooks?.[hookIndex];
  const hook: Hook<T> = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };

  const actions = oldHook?.queue ?? [];
  actions.forEach((action) => {
    hook.state = action(hook.state);
  });

  const setState = (action: HookAction<T>) => {
    hook.queue.push(action);
    wipRoot = {
      type: currentRoot!.type,
      props: currentRoot!.props,
      dom: currentRoot!.dom,
      alternate: currentRoot,
    };
    nextUnitOfWork = wipRoot;
    deletions = [];
  };

  wipFiber?.hooks?.push(hook);
  hookIndex++;
  return [hook.state, setState];
};

// TODO: 优化
const updateDom = (dom: HTMLElement | Text, prevProps: Fiber["props"], nextProps: Fiber["props"]) => {
  // 移除旧事件
  Object.keys(prevProps)
    .filter((key) => isEvent(key))
    .filter((key) => !(key in nextProps) || isNewProperty(prevProps, nextProps, key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // 移除旧属性
  Object.keys(prevProps)
    .filter((key) => isProperty(key))
    .filter((key) => isGoneProperty(prevProps, nextProps, key))
    .forEach((name) => {
      dom[name] = "";
    });

  // 设置新属性
  Object.keys(nextProps)
    .filter((key) => isProperty(key))
    .filter((key) => isNewProperty(prevProps, nextProps, key))
    .forEach((name) => {
      dom[name] = nextProps[name];
    });

  // 设置新事件
  Object.keys(nextProps)
    .filter((key) => isEvent(key))
    .filter((key) => isNewProperty(prevProps, nextProps, key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
};

const createDom = (fiber: Fiber) => {
  const dom = fiber.type === TEXT_ELEMENT_TYPE
    ? document.createTextNode("")
    : document.createElement(fiber.type as string);

  updateDom(dom, {}, fiber.props);

  return dom;
};

const commitDeletion = (fiber: Fiber, parentDOM: HTMLElement | Text) => {
  if (!fiber.dom) {
    commitDeletion(fiber.child!, parentDOM);
    return;
  }
  parentDOM.removeChild(fiber.dom);
};

const commitWork = (fiber?: Fiber | null) => {
  if (!fiber) return;

  let parent = fiber.parent!;
  while (!parent.dom) {
    parent = parent.parent!;
  }
  const parentDOM = parent.dom;

  // 操作DOM
  // 新增
  if (fiber.effectTag === EFFECT_TAG.PLACEMENT && fiber.dom) {
    parentDOM.appendChild(fiber.dom);
  }
  // 移除
  else if (fiber.effectTag === EFFECT_TAG.DELETION) {
    commitDeletion(fiber, parentDOM);
  }
  // 替换
  else if (fiber.effectTag === EFFECT_TAG.UPDATE && fiber.dom) {
    updateDom(fiber.dom, fiber.alternate?.props ?? {}, fiber.props);
  }

  commitWork(fiber.child);
  commitWork(fiber.sibling);
};

const commitRoot = () => {
  deletions.forEach(commitWork);
  if (wipRoot) {
    commitWork(wipRoot.child);
    currentRoot = wipRoot;
    wipRoot = null;
  }
};

// 对比新旧VDOM
// TODO: 优化对比算法
const reconcileChildren = (wipFiber: Fiber, children: Fiber[]) => {
  let index = 0;
  let oldFiber = wipFiber.alternate?.child;
  let prevSibling: Fiber | undefined = undefined;

  while (index < children.length || oldFiber) {
    const element = children[index];
    let newFiber: Fiber | undefined = undefined;

    const isSameType = element.type === oldFiber?.type;

    if (isSameType) {
      newFiber = {
        effectTag: EFFECT_TAG.UPDATE,
        type: oldFiber!.type,
        props: element.props,
        dom: oldFiber!.dom,
        parent: wipFiber,
        alternate: oldFiber,
      };
    }

    if (element && !isSameType) {
      newFiber = {
        effectTag: EFFECT_TAG.PLACEMENT,
        type: element.type,
        props: element.props,
        parent: wipFiber,
      };
    }

    if (oldFiber && !isSameType) {
      oldFiber.effectTag = EFFECT_TAG.DELETION;
      deletions.push(oldFiber);
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    if (index === 0) {
      wipFiber.child = newFiber;
    }
    else if (element) {
      prevSibling!.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }
};

// 刷新一般元素
const updateHostComponent = (fiber: Fiber) => {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  reconcileChildren(fiber, fiber.props.children);
};

// 刷新函数组件
const updateFunctionComponent = (fiber: Fiber) => {
  wipFiber = fiber;

  wipFiber.hooks = [];
  hookIndex = 0;

  // 重新执行函数组件，拿到状态更新后的VDOM
  const children = [(fiber.type as Function)(fiber.props)];

  reconcileChildren(fiber, children);
};

// 处理一个VDOM节点
// 最终会以这种顺序处理整个VDOM链表：自顶向下，自底向上
// (fiber -> fiber.child)循环往下 -> [(fiber.sibling)循环 -> fiber.parent]循环往上
const performUnitOfWork = (fiber: Fiber) => {
  const isFunctionComponent = fiber.type instanceof Function;

  // 处理函数组件
  if (isFunctionComponent) {
    updateFunctionComponent(fiber);
  }
  // 处理一般元素/纯文本
  else {
    updateHostComponent(fiber);
  }

  // 自顶向下
  if (fiber.child) {
    return fiber.child;
  }

  // 自底向上
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent!;
  }

  return null;
};

// 在浏览器空闲时，分段处理VDOM
const workLoop = (deadline?: IdleDeadline) => {
  let shouldYield = false;

  // 只要有待处理的VDOM，且空闲，就不断处理
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline ? deadline?.timeRemaining() < 1 : false;
  }

  // VDOM全部处理完毕，开始渲染
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  doWorkLoop(workLoop);
};

doWorkLoop(workLoop);