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

  diameter(root){
    let max = 0;
    function maxDepth(root){
      if(root == null){
        return 0;
      }

      let left = maxDepth(root.left);
      let right = maxDepth(root.right);
      max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
    maxDepth(root);
    return max;
  }
 }

let obj = new binaryTree();
let arr = [4, 1, 3, 7, 0, 6, 9];
console.log(`The given binary tree is :`);
console.log(arr);
for(let i = 0; i < arr.length; i++){
    obj.insertNode(arr[i]);
}
let result = obj.diameter(obj.root);
console.log(`The diameter of the binary tree is : ${result}`);

