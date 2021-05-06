class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binaryTree{
  constructor() {
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

  maxDepth(root) {
  if (!root){
     return 0;
  }
  return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
}
}

let arr = [30, 20, 10, 40, 50, 35, 25];
console.log(`The given binary tree is : ${arr}`);
let obj = new binaryTree();
for(let num of arr){
  obj.insertNode(num);
}
let result = obj.maxDepth(obj.root);
console.log(`The height of the binary tree is : ${result}`);