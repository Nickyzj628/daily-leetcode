/**
 * 114. 二叉树展开为链表
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-100-liked
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

    /**
     Do not return anything, modify root in-place instead.
     */
    function flatten(root: TreeNode | null): void {
        // 前序遍历
        const list: TreeNode[] = [];
        const preorder = (root: TreeNode | null) => {
            if (root === null) return;
            list.push(root);
            preorder(root.left);
            preorder(root.right);
        };
        preorder(root);

        // 用前序遍历的产物，构建单链表
        for (let i = 1; i < list.length; i++) {
            const prev = list[i - 1];
            const curr = list[i];
            prev.left = null;
            prev.right = curr;
        }
    };

    // [1,null,2,null,3,null,4,null,5,null,6]
    let root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, null, new TreeNode(6)));
    console.log(flatten(root));
}