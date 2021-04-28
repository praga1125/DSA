class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binaryTree{
  constructor(){
    this.root = null;
    this.result = {};
    this.min =0;
    this.max = 0;
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
      else{
        if(current.right == null){
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  getBottomView(root, width, height) {
    if(!root) {
        return;
    }
    if(this.min > width) {
        this.min = width;
    }
    if(this.max < width) {
        this.max = width;
    }
    if(this.result[width]) {
       if(this.result[width].height <= height) {
            this.result[width] = {
                key: root.data,
                height: height
            };    
       } 
     }
    else {
        this.result[width] = {
            key: root.data,
            height: height
        };
    }
    this.getBottomView(root.left, width-1, height+1);
    this.getBottomView(root.right, width+1, height+1);
}

  bottomView(root){
    if(!root) {
        return [];
    }
    let result = [];
    this.getBottomView(root, 0, 0);
    for(let i = this.min; i <= this.max; i++) {
        result.push(this.result[i].key);
    }
    return result;
}
}

let arr = [20, 10, 40, 15, 5, 35, 45];
console.log(`The given binary tree is : `);
console.log(arr);
let obj = new binaryTree();
for(let i of arr){
  obj.insertNode(i);
}
let result = obj.bottomView(obj.root);
console.log(`The bottom view of the binary tree is :`);
console.log(result);