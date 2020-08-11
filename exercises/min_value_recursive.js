const { BSTObject } = require('../index');

function minValueRecursive(node) {
    if (node === null){
        return 0;
    }
    if(node.left === null){
        return node.data;
    }
    return minValueRecursive(node.left)
}

console.log(minValueRecursive(BSTObject.root))