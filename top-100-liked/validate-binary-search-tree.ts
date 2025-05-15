/**
 * 98. 验证二叉搜索树
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 有效 二叉搜索树定义如下：
 * 节点的左子树只包含 小于 当前节点的数。
 * 节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * https://leetcode.cn/problems/validate-binary-search-tree/description/?envType=study-plan-v2&envId=top-100-liked
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

    function isValidBST(root: TreeNode | null): boolean {
        // dfs中序遍历
        let preVal = -Infinity;
        const dfs = (node: typeof root) => {
            if (node === null) return true;

            if (!dfs(node.left)) return false;
            
            if (node.val <= preVal) return false;
            preVal = node.val;

            return dfs(node.right);
        };
        return dfs(root);
    };

    // 输出：false
    // 解释：根节点的值是 5 ，但是右子节点的值是 4 。
    let root = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
    console.log(isValidBST(root));
}