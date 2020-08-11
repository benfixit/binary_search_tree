const { BSTObject } = require('../index');

function minValueIterative(node) {
    if (node === null){
        return 0;
    }
    let currentNode = node;
    while(true){
        if(currentNode.left){
            currentNode = currentNode.left
        } else {
            break;
        }
    }
    return currentNode;
}

console.log(minValueIterative(BSTObject.root))