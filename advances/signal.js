// 仿照solid和jotai实现，底部有示例

/**
 * 待执行的副作用
 * @type {(()=>void)[]}
 */
const effects = []

/**
 * 创建响应式数据
 * @param {T} initialValue 初始值
 * @description 返回getter()和setter()，其中：getter()只是返回signal的值，如果是在useEffect()里调用会多做一步——把副作用函数加入订阅；setter()改变signal的值并将所有订阅者执行一遍。
 * @returns {[()=>T, (newValue:T)=>void]}
 */
function useSignal(initialValue) {
	const signal = {
		value: initialValue,
		subscribers: new Set(),
	}
	const getter = () => {
		const effect = effects.at(-1)
		if (effect) signal.subscribers.add(effect)
		return signal.value
	}
	const setter = (newValue) => {
		// 简单对比，实际更复杂
		if (newValue === signal.value) return
		signal.value = newValue
		signal.subscribers.forEach((subscriber) => subscriber())
	}
	return [getter, setter]
}

/**
 * 创建副作用
 * @param {()=>void} fn
 * @description 立即执行回调函数，在用到的signal的getter()中会自动将该函数加入订阅，并在setter()时触发该函数。
 */
function useEffect(fn) {
	const effect = () => {
		effects.push(effect)
		fn()
		effects.pop()
	}
	effect()
}

// 简单示例
const [count, setCount] = useSignal(0)
const double = () => count() * 2
useEffect(() => {
	console.log(double())
})
setInterval(() => {
	setCount(count() + 1)
}, 1000)
