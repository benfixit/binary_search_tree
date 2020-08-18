const { BSTObject } = require('../index');

function mirrorIterative (node) {
    if(node === null){
        return;
    }
    const stack = stack2 = [];
    stack.push(node);

    while(stack.length > 0){
        let currentNode = stack.pop();

        if(currentNode.left && currentNode.right){
            let temp = currentNode.right
            currentNode.right = currentNode.left
            currentNode.left = temp
        }

        if(currentNode.right){
            stack.push(currentNode.right)
        }

        if(currentNode.left){
            stack.push(currentNode.left)
        }
    }
}

mirrorIterative(BSTObject.root);
console.log(BSTObject.root);