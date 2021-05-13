/*
  Input :
    root = [5, 3, 4, 1, 8, 6, 9], p = 6 , q = 9
  Output:
    8

*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binaryTree{
  constructor() {
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
  lowestAncestor(root, p, q){          // p and q are descendants
    if(!root || root.data == p || root.data == q){
      return root;
    }
    const left = this.lowestAncestor(root.left, p, q);
    const right = this.lowestAncestor(root.right, p, q);

    if(!left){
      return right;
    }
    if(!right){
      return left;
    }
    return root.data;
  }

}

let arr = [5, 3, 4, 1, 8, 6, 9];
console.log(`The given binary tree is : ${arr}`);
let obj = new binaryTree();
for(let i of arr){
  obj.insert(i);
}

let p = 1, q = 4;
console.log(`The given descendants are : ${p} , ${q}`);
let result = obj.lowestAncestor(obj.root, p, q);
console.log(`The lowest common ancestor is : ${result}`);