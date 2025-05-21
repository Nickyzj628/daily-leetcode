/**
 * 105. 从前序与中序遍历序列构造二叉树
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-100-liked
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

    function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        if (preorder.length === 0) return null;

        // 取前序遍历第一个数作为根节点root
        // 在中序遍历里找到root后，它左边就是左子树的中序遍历，右边就是右子树的中序遍历
        const rootVal = preorder[0];
        const root = new TreeNode(rootVal, null, null);
        const rootIndexAtInorder = inorder.indexOf(rootVal);

        root.left = buildTree(
            preorder.slice(1, rootIndexAtInorder + 1),
            inorder.slice(0, rootIndexAtInorder)
        );
        root.right = buildTree(
            preorder.slice(rootIndexAtInorder + 1),
            inorder.slice(rootIndexAtInorder + 1)
        );

        return root;
    };

    // [3,9,20,null,null,15,7]
    console.log(JSON.stringify(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]), null, 3));
}