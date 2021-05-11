class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binaryTree {
  constructor(){
    this.root = null;
  }

  insert(data){
    let node = new Node(data);
    if(this.root == null){
      this.root = node;
    }
    let current = this.root;
    while(current){
    if(current.data == data){
      return undefined;
    } 
    if(data < current.data){
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

  isBalanced(root){
    function dfs(node){
      if(!node){
        return 0;
      }
      let left = 1 + dfs(node.left);
      let right = 1 + dfs(node.right);
      if(Math.abs(left - right) > 1){
        return Infinity;
      }
      return Math.max(left, right);
    }
    return dfs(root) == Infinity ? false : true; 
  }
}

let obj = new binaryTree();
let arr = [5, 8, 7, 9, 3];
console.log(`The given binary tree is : ${arr}`);
for(let i of arr){
  obj.insert(i);
}
let result = obj.isBalanced(obj.root);
if(result){
  console.log(`The binary tree height is balanced`);
}
else {
  console.log(`The binary tree height is not balanced`);
}
