const { BSTObject } = require('../index');

function maxDepthIterative(node) {
    if (node === null){
        return 0;
    }
    const queue = [];
    let height = 0;
    queue.push(node);
    while(true){
        let nodeCount = queue.length;
        if(nodeCount === 0){
            return height - 1
        }
        height++;
        while(nodeCount > 0){
            let tempNode = queue.shift();
            if(tempNode.left){
                queue.push(tempNode.left)
            }
            if(tempNode.right){
                queue.push(tempNode.right)
            }
            nodeCount--;
        }
    }
}

console.log(maxDepthIterative(BSTObject.root))