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

  isSameTree (tree1, tree2) {
    if(!tree1 && !tree2){
      return true;
    }
    if(!tree1 || !tree2){
      return true;
    }
    if(tree1.data !== tree2.data) {
      return false;
    }
    return this.isSameTree(tree1.left, tree2.left) && this.isSameTree(tree1.right, tree2.right);
  }
}

let obj1 = new binaryTree();
let obj2 = new binaryTree();
let obj3 = new binaryTree();
let tree1 = [5, 3, 4, 2, 8, 7, 9];
let tree2 = [5, 3, 4, 2, 8, 7, 9];
console.log(`The given trees are :`);
console.log(`Tree 1 : ${tree1}`);
console.log(`Tree 2 : ${tree2}`);
for(let i = 0; i < tree1.length; i++){
  obj1.insertNode(tree1[i]);
  obj2.insertNode(tree2[i]);
}

let result = obj3.isSameTree(obj1.root, obj2.root);
if(result){
  console.log(`The two binary trees are identical.`);
}
else {
  console.log(`The two binary trees are not identical.`);
}

