class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binaryTree {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    let node = new Node(value);
    if(this.root == null) {
      this.root = node;
    }
    let current = this.root;
    while(current) {
      if(value == current.data) {
       return undefined;
      }
    if(value < current.data) {
      if(current.left == null) {
        current.left = node;
        return this;
      }
      current = current.left;
    }
    else {
      if(current.right == null) {
        current.right = node;
        return this;
    }
      current = current.right;
    }
  } 
 }

  zigzagLevelTraverse(root) {
    if(!root) {
      return [];
    }
    let result = [];
    let queue = [root];
    let j = 1;
    while(queue.length) { 
      let levelSize = queue.length;
      let currentLevel = [];
      for(let i = 0; i < levelSize; i++) {
        let current =  queue.shift();
        if(current.left) {
          queue.push(current.left);
        }
        if(current.right) {
          queue.push(current.right);
        }
        if(j % 2 == 1) {
          currentLevel.push(current.data);
        } else {
          currentLevel.unshift(current.data);
        }
      }
    j++
    result.push(currentLevel);
    }
    return result;
  }
}

let obj = new binaryTree();
const arr = [5, 3, 4, 1, 8, 7];
console.log(`The given binary tree is : ${arr} `);
for(let i of arr){
  obj.insertNode(i);
}
const result = obj.zigzagLevelTraverse(obj.root);
console.log(`The values of the zig zag level traversal :`);
console.log(result); 
