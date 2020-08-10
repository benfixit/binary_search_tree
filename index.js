class Node {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        console.log(this.data);
    }
}

class BST {
    constructor(){
        this.root = null
    }

    insert(data){
        let node = new Node(data, null, null);
        if (this.root === null){
            this.root = node;
            return;
        }
        let currentNode = this.root;
        while(true){
            if(data <= currentNode.data){
                if(currentNode.left !== null){
                    currentNode = currentNode.left
                } else {
                    currentNode.left = node;
                    break;
                }
            } else {
                if(currentNode.right !== null){
                    currentNode = currentNode.right
                } else {
                    currentNode.right = node;
                    break;
                }
            }
        }
    }

    postOrderRecursive(node){
        if(node !== null){
            this.postOrderRecursive(node.left);
            this.postOrderRecursive(node.right);
            node.show();
        }
    }
}

const bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
bst.insert(2);
bst.insert(4);

module.exports = {
    BST,
    BSTObject: bst
}
