const { BSTObject } = require('../index')

function preOrderIterative (node) {
    if (node === null){
        return;
    }
    const stack = [];
    stack.push(node);
    while(stack.length > 0){
        let currentNode = stack.pop()
        console.log(currentNode.data)
        
        if (currentNode.right){
            stack.push(currentNode.right)
        } 
        if (currentNode.left){
            stack.push(currentNode.left)
        }
    }
}

preOrderIterative(BSTObject.root)