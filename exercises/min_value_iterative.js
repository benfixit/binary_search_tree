const { BSTObject } = require('../index');

function minValueIterative(node) {
    if (node === null){
        return 0;
    }
    let currentNode = node;
    while(currentNode.left){
        currentNode = currentNode.left
    }
    return currentNode.data;
}

console.log(minValueIterative(BSTObject.root))