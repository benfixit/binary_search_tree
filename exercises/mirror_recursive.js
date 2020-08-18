const { BSTObject } = require('../index');

function mirrorRecursive (node) {
    if(node === null){
        return;
    }
    if(node.left && node.right){
        let temp = node.left
        node.left = node.right
        node.right = temp
    }
    mirrorRecursive(node.left)
    mirrorRecursive(node.right)
}

mirrorRecursive(BSTObject.root);
console.log(BSTObject.root);