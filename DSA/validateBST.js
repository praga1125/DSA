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
        this.values = [];
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
    insertNode(oldNode, newNode){
        if(newNode.data < oldNode.data){
            if(oldNode.left == null){
                oldNode.left = newNode;
            }
            else{
                this.insertNode(oldNode.left, newNode);
            }
        }
        else{
            if(oldNode.right == null){
                oldNode.right = newNode;
            }
            else{
                this.insertNode(oldNode.right, newNode);
            }
        }
    }
    getRootNode(){
        return this.root;
    }
     isValidBST(root, min=null, max=null) {
        if (!root) return true;
        if (min && root.data <= min.data) return false;
        if (max && root.data >= max.data) return false;
        return this.isValidBST(root.left, min, root) && this.isValidBST(root.right, root, max);
    }   
}
const obj = new binarySearchTree();
let values = [5, 2, 1, 3, 7, 6, 8];
for(let i = 0; i < values.length; i++){
    obj.insert(values[i]);
}
let root = obj.getRootNode();
let ans = obj.isValidBST(root);
console.log(`The given binary tree is validated : ${ans}`);