const { BSTObject } = require('../index')

function hasPathSumIterative (node, sum) {
    if (node === null){
        return false;
    }

    const queue = [];
    queue.push(node)
    while(queue.length > 0){
        let currentNode = queue.shift();
        if(!currentNode.left && !currentNode.right && currentNode.data === sum){
            return true
        }
        if(currentNode.left){
            currentNode.left.data += currentNode.data
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            currentNode.right.data += currentNode.data
            queue.push(currentNode.right)
        }
    }

    return false;
}

console.log(hasPathSumIterative(BSTObject.root, 6))