// post order traversal in non recursive method..
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    insertNode(value){
        let node = new Node(value);
        if(this.root == null){
            this.root = node;
        }
        let current = this.root;
        while(current){
            if(value == current.data){
                return undefined;
            }
            if(value < current.data){
                if(current.left == null){
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
            else {
                if(current.right == null){
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        } 
    }

    postOrder(root){
        let stack = [root];
        let result = []
        if(!root){
           return [];
        }
        while(stack.length > 0) {
            let node = stack.pop();
            result.push(node.data);
            if(node.left){ 
              stack.push(node.left);
            }
            if(node.right){ 
              stack.push(node.right);
            }
        }
        return result.reverse();
    }
}

let obj = new binarySearchTree();
let arr = [1, 2, 3];
console.log(`The given BST is : `);
console.log(arr);
for(let i of arr){
    obj.insertNode(i);
}
let result = obj.postOrder(obj.root);
console.log(`The postorder for the binary search tree :`);
console.log(result);