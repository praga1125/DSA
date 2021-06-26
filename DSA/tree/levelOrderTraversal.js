// using BFS for the level order searching
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

  insertNode(data){
    let node = new Node(data);
    if(this.root == null){
      this.root = node;
    }
    let current = this.root;
    while(current){
      if(data == current.data){
        return undefined;
      }
      if(data < current.data){
        if(current.left == null){
          current.left = node;
          return this;
        }
        current = current.left;
      }
      else{
        if(current.right == null){
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  levelOrderTraversal(root){
    let result = [];
    if(!root) return result;
    return traversal(root, 0, result);
    function traversal(root, level, result) {
      if(result.length == level) {
        result.push([]);
      }
      result[level].push(root.data);
      if(root.left) {
        traversal(root.left, level+1, result);
      }
      if(root.right) {
        traversal(root.right, level+1, result);
      }
      return result;
    }
  }
}

let arr = [30, 20, 10, 40, 50, 35, 25];
console.log(`The given in binary tree is : `);
console.log(arr);
let obj = new binaryTree();
for(let num of arr){
  obj.insertNode(num);
}
let result = obj.levelOrderTraversal(obj.root);
console.log(`The level order traversal of tree is : `);
console.log(result);