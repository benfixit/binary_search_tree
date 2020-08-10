class Node {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data;
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
            if(data < currentNode.data){
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
}

const bst = new BST();
bst.insert(6);
bst.insert(4);
bst.insert(7);
bst.insert(1);
bst.insert(5);
console.log(bst)