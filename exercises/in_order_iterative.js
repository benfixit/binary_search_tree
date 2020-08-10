const { BSTObject } = require('../index')

function inOrderIterative (node) {
    if (node === null){
        return;
    }
    const stack = [];
    stack.push(node);
    let currentNode = node;
    while(stack.length > 0){
        if(currentNode.left){
            currentNode = currentNode.left
            stack.push(currentNode)
        } else {
            const temp = stack.pop();
            console.log(temp.data);
            if(temp.right){
                stack.push(temp.right)
            }
        }
    }
}

inOrderIterative(BSTObject.root)