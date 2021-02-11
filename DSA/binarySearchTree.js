class node{
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
    insert(data){
        let newNode = new node(data);
        if(this.root == null){
            this.root = newNode;
        } 
        else{
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node1, newNode){
        if(newNode.data < node1.data){
            if(node1.left == null){
                node1.left = newNode;
            }
            else{
                this.insertNode(node1.left, newNode);
            }
        }
        else{
            if(node1.right == null){
                node1.right = newNode;
            }
            else{
                this.insertNode(node1.right, newNode);
            }
        }
    }

    inorder(node){ 
    if(node !== null) 
    {  
        this.inorder(node.left);
        console.log(node.data);  
        this.inorder(node.right); 
    }     
    }
    preorder(node){ 
        if(node !== null) 
        {  
            console.log(node.data);  
            this.inorder(node.left);
            this.inorder(node.right); 
        }
    } 
        postorder(node){ 
            if(node !== null) 
            {  
                this.inorder(node.left);
                this.inorder(node.right); 
                console.log(node.data);  
            } 
        }
    getRootNode(){
        return this.root;
    }
}
const obj = new binarySearchTree();
let values = [9, 5, null, 8, 2];
for(let i = 0; i < values.length; i++){
    obj.insert(values[i]);
}
let root = obj.getRootNode();

let result = [];
let ans = obj.maxValue(root) - 1;
console.log(ans);

console.log(`inorder traversal`);
console.log(`------------------`);
obj.inorder(root);

console.log(`preorder traversal`);
console.log(`------------------`);
obj.preorder(root);

console.log(`postorder traversal`);
console.log(`------------------`);
obj.postorder(root);

