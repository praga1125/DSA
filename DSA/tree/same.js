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
    isSameTree(tree1, tree2) {
        if (!tree1 && !tree2) return true;
        if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;
        
        return this.isSameTree(tree1.left, tree2.left) && this.isSameTree(tree1.right, tree2.right);
      }
}
let arr1 = [5, 2, 1, 3, 7, 6, 8];
let arr2 = [5, 2, 1, 3, 7, 6, 8, 6];
let obj1 = new binarySearchTree();
let obj2 = new binarySearchTree();
for(let i=0;i<arr1.length;i++){
    obj1.insert(arr1[i]);
}
for(j=0;j<arr2.length;j++){
    obj2.insert(arr2[j]);
}
let root1 = obj1.getRootNode();
let root2 = obj2.getRootNode();
let result = obj1.isSameTree(root1, root2);
if(result){
    console.log(`The trees are same`);
}
else{
    console.log(`The trees are not same`);
}