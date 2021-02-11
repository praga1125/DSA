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
    getRootNode(){
        return this.root;
    }
    invertTree(root){
        const stack = [root];
        while (stack.length) {
          const n = stack.pop();
          if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
          }
        }
        return root;
      }
}
const obj = new binarySearchTree();
const arr = [5, 2, 1, 3, 7, 6, 8];
for(let i =0;i<arr.length;i++){
    obj.insert(arr[i]);
}
let root = obj.getRootNode();
obj.invertTree(root);
obj.inorder(root);