const { BSTObject } = require('../index')

function preOrderRecursive(node){
    if(node !== null){
        node.show();
        preOrderRecursive(node.left);
        preOrderRecursive(node.right);
    }
}

preOrderRecursive(BSTObject.root)