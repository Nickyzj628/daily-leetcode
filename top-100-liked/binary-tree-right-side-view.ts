/**
 * 199. 二叉树的右视图
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-100-liked
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

    function rightSideView(root: TreeNode | null): number[] {
        // dfs
        const answer: number[] = [];

        const dfs = (root: TreeNode | null, depth: number) => {
            if (root === null) return;
            // 当前深度第一次遇到的节点，推入答案
            if (depth === answer.length) {
                answer.push(root.val);
            }
            // 因为是右视图，所以先遍历右子树
            dfs(root.right, depth + 1);
            dfs(root.left, depth + 1);
        };

        dfs(root, 0);
        return answer;
    };

    // [1,3,4]
    let root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)));
    console.log(rightSideView(root));
}