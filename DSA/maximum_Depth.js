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
    getRootNode(){
        return this.root;
    }
    maxValue(root){
        if(root == undefined || root == null){
            return 0;
        }
       return Math.max(this.maxValue(root.left), this.maxValue(root.right))+1;
 }
}
const obj = new binarySearchTree(); 
let arr = [1, 2, 3, 4, 5, 6 ,7 , 8, 9];
for(let i=0;i<arr.length;i++){
    obj.insert(arr[i]);
}
let root = obj.getRootNode();
const max = obj.maxValue(root);
console.log(max);