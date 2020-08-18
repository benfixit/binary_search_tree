const { BSTObject } = require('../index');

function printPaths (map, currentNode) {
    const stack = [];
    let str = ''
    while(currentNode){
        stack.push(currentNode);
        currentNode = map[currentNode.data]
    }
    while(stack.length > 0){
        let curr = stack.pop();
        str += ` ${curr.data}`
    }
    console.log(str)
}
function printPathsIterative (node) {
    if(node === null){
        return;
    }
    const stack = [];
    const map = {};
    stack.push(node);
    while(stack.length > 0){
        let currentNode = stack.pop();
        if(!currentNode.left && !currentNode.right){
            printPaths(map, currentNode)
            console.log('==================')
        }
        if(currentNode.right){
            stack.push(currentNode.right)
            map[currentNode.right.data] = currentNode
        }
        if(currentNode.left){
            stack.push(currentNode.left)
            map[currentNode.left.data] = currentNode
        }
    }
}

printPathsIterative(BSTObject.root);