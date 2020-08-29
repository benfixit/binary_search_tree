const { BSTObject } = require('../index');

function isBSTRecursive(node){
    if(node === null){
        return;
    }
    if(node.left && node.left.data > node.data){
        return 'false';
    }
    if(node.right && node.right.data < node.data) {
        return 'false'
    }
    isBSTRecursive(node.left)
    isBSTRecursive(node.right)
    return 'true';
}

console.log(isBSTRecursive(BSTObject.root))