// 1367. 二叉树中的链表
// https://leetcode.cn/problems/linked-list-in-binary-tree/

// 给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。
// 如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False 。
// 一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  // 树的一条分支遍历结束，该分支无答案
  if (root === null) return false;
  // 先在当前分支展开dfs，再从左右子树重新找
  return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
};

/**
 * @param {ListNode} head
 * @param {TreeNode} node
 * @return {boolean}
 */
var dfs = function (head, node) {
  // 链表遍历结束，找到答案
  if (head === null) return true;
  // 树的一条分支遍历结束，该分支无答案
  if (node === null) return false;
  // 判断当前链表和树节点的数值
  if (head.val !== node.val) return false;
  // 继续从左右子树dfs
  return dfs(head.next, node.left) || dfs(head.next, node.right);
};

const head = new ListNode(4, new ListNode(2, new ListNode(8)));
const root = new TreeNode(1, new TreeNode(4, null, new TreeNode(2, new TreeNode(1))), new TreeNode(4, new TreeNode(2, new TreeNode(6), new TreeNode(8, new TreeNode(1), new TreeNode(3)))));

// https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/02/29/sample_1_1720.png
// 树中蓝色的节点构成了与链表对应的子路径。
console.log(isSubPath(head, root));  // true