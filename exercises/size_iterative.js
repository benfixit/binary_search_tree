const { BSTObject } = require('../index')

function sizeIterative(node){
    let size = 0;
    if(node === null){
        return size;
    }
    const stack = [];
    stack.push(node)
    while(stack.length > 0) {
        size++;
        let currentNode = stack.pop();
        if(currentNode.right){
            stack.push(currentNode.right)
        }
        if(currentNode.left){
            stack.push(currentNode.left)
        }
    }
    return size;
}

console.log(sizeIterative(BSTObject.root))