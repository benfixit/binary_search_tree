const { BSTObject } = require('../index');

function postOrderIterative (node) {
    if(node === null){
        return;
    }
    const stack1 = [];
    const stack2 = [];
    stack1.push(node);
    while(stack1.length > 0){
        let currentNode = stack1.pop();
        stack2.push(currentNode);

        if(currentNode.left){
            stack1.push(currentNode.left);
        }

        if(currentNode.right){
            stack1.push(currentNode.right);
        }
    }

    while(stack2.length > 0){
        let currentNode = stack2.pop();
        console.log(currentNode.data);
    }
}

postOrderIterative(BSTObject.root);