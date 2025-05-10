/**
 * 101. 对称二叉树
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * https://leetcode.cn/problems/symmetric-tree/?envType=study-plan-v2&envId=top-100-liked
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

    function isSymmetric(root: TreeNode | null): boolean {
        // dfs
        const dfs = (a: TreeNode | null, b: TreeNode | null) => {
            // 如果都遍历完了，它们是对称的
            if (a === null && b === null) return true;
            // 如果只有一个遍历完，它们不对称
            if (a === null || b === null) return false;
            // 继续比较当前节点，及其左右子树
            return a.val === b.val && dfs(a.left, b.right) && dfs(a.right, b.left);
        };
        if (root === null) return true;
        return dfs(root.left, root.right);
    };

    // true
    let root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
    console.log(isSymmetric(root));
}