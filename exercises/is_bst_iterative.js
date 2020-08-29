const { BSTObject } = require('../index');

function isBSTIterative(node){
    if(node === null){
        return;
    }

    const stack = [];
    stack.push(node);
    while(stack.length > 0){
        let currentNode = stack.pop();
        console.log(currentNode.data)
        if(currentNode.right){
            if(currentNode.right.data < currentNode.data){
                return 'false'
            } else{
                stack.push(currentNode.right)
            }
        }
        if(currentNode.left){
            if(currentNode.left.data > currentNode.data){
                return 'false'
            } else{
                stack.push(currentNode.left)
            }
        }
    }
    return 'true'
}

console.log(isBSTIterative(BSTObject.root));