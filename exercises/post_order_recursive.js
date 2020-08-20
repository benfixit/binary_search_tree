const { BSTObject } = require('../index');

function postOrderRecursive (node) {
    if(node !== null){
        postOrderRecursive(node.left)
        postOrderRecursive(node.right)
        console.log(node.data)
    }
}

postOrderRecursive(BSTObject.root);