class Node {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
        this.show = this.show.bind(this);
    }

    show() {
        return this.data;
    }
}

class BST {
    constructor(){
        this.root = null
    }
}

console.log(new BST())