const { BSTObject } = require('../index');

function sizeRecursive(node){
    if(node === null){
        return 0;
    }

    return 1 + sizeRecursive(node.left) + sizeRecursive(node.right);
}

console.log(sizeRecursive(BSTObject.root));