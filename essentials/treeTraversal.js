class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

/**
 * 层序遍历
 * @param {TreeNode} root
 */
function levelOrderTraversal(root) {
    if (!root) return []
    const answer = []
    const queue = [root]
    while (queue.length > 0) {
        const node = queue.shift()
        answer.push(node.value)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return answer
}

/**
 * 前序遍历
 * @param {TreeNode} root
 */
function preorderTraversal(root) {
    const answer = []
    function traverse(node) {
        if (!node) return
        answer.push(node.value)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return answer
}

/**
 * 中序遍历
 * @param {TreeNode} root
 */
function inorderTraversal(root) {
    const answer = []
    function traverse(node) {
        if (!node) return
        traverse(node.left)
        answer.push(node.value)
        traverse(node.right)
    }
    traverse(root)
    return answer
}

/**
 * 后序遍历
 * @param {TreeNode} root
 */
function postorderTraversal(root) {
    const answer = []
    function traverse(node) {
        if (!node) return
        traverse(node.left)
        traverse(node.right)
        answer.push(node.value)
    }
    traverse(root)
    return answer
}

//        1
//       / \
//      2   3
//     / \ / \
//    4  5 6  7
const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))

console.log(levelOrderTraversal(tree)) // [1,2,3,4,5,6,7]
console.log(preorderTraversal(tree)) // [1,2,4,5,3,6,7]
console.log(inorderTraversal(tree)) // [4,2,5,1,6,3,7]
console.log(postorderTraversal(tree)) // [4,5,2,6,7,3,1]
