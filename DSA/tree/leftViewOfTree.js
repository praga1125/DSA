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
        this.str = [];
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

    preOrder(node){ 
        if(node !== null) 
        {  
            this.str.push(String(node.data)); 
            this.preOrder(node.left);
        }
    } 
}

let obj = new binarySearchTree();
let arr = [4, 1, 3, 7, 0, 6, 9];
console.log(`The given binary tree is :`);
console.log(arr);
for(let i = 0; i < arr.length; i++){
    obj.insertNode(arr[i]);
}
obj.preOrder(obj.root);
console.log(`The left view of the binary tree is : `);
console.log(obj.str);