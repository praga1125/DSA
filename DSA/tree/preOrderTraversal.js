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

    preOrder(root){
       let stack = [root];
       let result = [];
       while(stack.length > 0){
           let node = stack.pop();
           result.push(node.data);
           if(node.right){
            stack.push(node.right);
        }  
           if(node.left){
               stack.push(node.left);
           }
       }
       return result;
    }
}

let obj = new binarySearchTree();
let arr = [5, 6, 7, 8, 0, 1, 2,];
console.log(`The given Binary Tree is : `);
console.log(arr);
for(let i of arr){
    obj.insertNode(i);
}

let result = obj.preOrder(obj.root);
console.log(`The preorder traversal for the binary tree :`);
console.log(result);