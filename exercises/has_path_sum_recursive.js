const { BSTObject } = require('../index')

function hasPathSumRecursive (node, sum) {
    if (node === null){
        return false;
    }

    let newSum = sum - node.data

    if (!node.left && !node.right && newSum === 0){
        return true;
    }

    return hasPathSumRecursive(node.left, newSum) || hasPathSumRecursive(node.right, newSum)
}

console.log(hasPathSumRecursive(BSTObject.root, 42))