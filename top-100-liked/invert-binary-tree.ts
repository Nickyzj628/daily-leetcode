/**
 * 226. 翻转二叉树
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * https://leetcode.cn/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked
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

    function invertTree(root: TreeNode | null): TreeNode | null {
        // dfs
        if (root === null) return null;
        const left = invertTree(root.left);
        const right = invertTree(root.right);
        root.left = right;
        root.right = left;
        return root;
    };

    // [4,7,2,9,6,3,1]
    let root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
    console.log(JSON.stringify(invertTree(root), null, 3));
}