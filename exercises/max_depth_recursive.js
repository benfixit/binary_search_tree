const { BSTObject } = require('../index');

function maxDepthRecursive(node) {
    if (node === null){
        return 0;
    }
    
    return 1 + Math.max(maxDepthRecursive(node.left), maxDepthRecursive(node.right))
}

console.log(maxDepthRecursive(BSTObject.root))