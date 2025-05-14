/**
 * 108. 将有序数组转换为二叉搜索树
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。
 * https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/?envType=study-plan-v2&envId=top-100-liked
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

    function sortedArrayToBST(nums: number[]): TreeNode | null {
        // nums升序 => 中序遍历 => 左根右
        // 每次用中间的数作为根节点，左边的数作为左子树，右边的数作为右子树
        const dfs = (low: number, high: number) => {
            if (low > high) return null;
            const mid = Math.floor((low + high) / 2);
            const root = new TreeNode(nums[mid]);
            root.left = dfs(low, mid - 1);
            root.right = dfs(mid + 1, high);
            return root;
        };

        return dfs(0, nums.length - 1);
    };

    // [0,-3,9,-10,null,5]
    let nums = [-10, -3, 0, 5, 9];
    console.log(sortedArrayToBST(nums));
}