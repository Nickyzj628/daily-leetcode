/**
 * 94. 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/description/?envType=study-plan-v2&envId=top-100-liked
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

    function inorderTraversal(root: TreeNode | null): number[] {
        const answer: number[] = [];

        // 左根右
        const dfs = (root: TreeNode | null) => {
            if (root === null) return;
            dfs(root.left);
            answer.push(root.val);
            dfs(root.right);
        };

        dfs(root);
        return answer;
    };

    // [1,3,2]
    let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
    console.log(inorderTraversal(root));
}