class node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class traverse{
   constructor(){
        this.root = null;
        this.result = [];
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
    traverse(root, level){
        if(root == null){
             return;
        }
        else{
            if(level >= this.result.length){
                this.result[level] = [];
            }
            this.result[level].push(root.data);
            this.traverse(root.left, level+1)
            this.traverse(root.right, level+1)
            
    }
    return this.result;
}
    getRootNode(){
        return this.root;
    }
}
let obj = new traverse();
let arr = [5, 2, 1, 3, 7, 6, 8];
for(let i=0;i<arr.length;i++){
 obj.insert(arr[i]);
}
let level = 0;
let root = obj.getRootNode();
let result = obj.traverse(root, level);
console.log(result);