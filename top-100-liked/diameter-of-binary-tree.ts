/**
 * 543. 二叉树的直径
 * 给你一棵二叉树的根节点，返回该树的 直径 。
 * 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
 * 两节点之间路径的 长度 由它们之间边数表示。
 * https://leetcode.cn/problems/diameter-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked
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

    function diameterOfBinaryTree(root: TreeNode | null): number {
        // dfs
        let answer = 0;
        const dfs = (root: TreeNode | null) => {
            if (root === null) {
                return -1;
            }
            // 计算左右子树的深度
            const left = dfs(root.left) + 1;
            const right = dfs(root.right) + 1;
            // 更新答案
            answer = Math.max(answer, left + right);
            // 返回当前节点最长路径
            return Math.max(left, right);
        };
        dfs(root);
        return answer;
    };

    // 3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
    let root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
    console.log(diameterOfBinaryTree(root));
}