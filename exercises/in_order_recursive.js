const { BSTObject } = require('../index')

function inOrderRecursive(node){
    if(node !== null){
        inOrderRecursive(node.left);
        node.show();
        inOrderRecursive(node.right);
    }
}

inOrderRecursive(BSTObject.root)