/**
 * 230. 二叉搜索树中第 K 小的元素
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-100-liked
 */

{
    class TreeNode {
        val: number
        left: TreeNode | null
        right: TreeNode | null
        constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.left = (left === undefined ? null : left)
            this.right = (right === undefined ? null : right)
        }
    }

    function kthSmallest(root: TreeNode | null, k: number): number {
        // 中序遍历，可以从小到大遍历BST
        const dfs = (root: TreeNode | null) => {
            if (root === null) return null;

            // 从左子树找答案
            const answerAtLeft = dfs(root.left);
            if (answerAtLeft !== null) return answerAtLeft;

            // 当前节点是答案
            if (--k === 0) return root.val;

            // 从右子树找答案
            return dfs(root.right);
        };
        return dfs(root);
    };

    // 1
    let root = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
    console.log(kthSmallest(root, 1));

    // 3
    root = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1), null), new TreeNode(4)), new TreeNode(6));
    console.log(kthSmallest(root, 3));
}