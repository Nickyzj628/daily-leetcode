/**
 * 236. 二叉树的最近公共祖先
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked
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

    function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        const dfs = (root: TreeNode | null) => {
            if (root === null) return null;
            if (root === p || root === q) return root;

            const left = dfs(root.left);
            const right = dfs(root.right);

            // 在同一边，这边第一个找到的就是祖先
            if (left === null) return right;
            if (right === null) return left;

            // 在左右子树上，当前节点是祖先
            return root;
        };
        return dfs(root);
    };

    // 输出：3
    // 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
    let root = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(0), new TreeNode(8)));
    console.log(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(1)));
}