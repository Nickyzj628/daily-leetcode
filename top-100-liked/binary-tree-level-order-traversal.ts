/**
 * 102. 二叉树的层序遍历
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/?envType=study-plan-v2&envId=top-100-liked
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

    function levelOrder(root: TreeNode | null): number[][] {
        // bfs
        const answer: number[][] = [];
        if (root === null) return answer;

        const queue = [root];
        while (queue.length > 0) {
            const level: number[] = [];
            const nodeCount = queue.length;
            for (let i = 0; i < nodeCount; i++) {
                const node = queue.shift()!;
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            answer.push(level);
        }

        return answer;
    };

    // [[3],[9,20],[15,7]]
    let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    console.log(levelOrder(root));
}