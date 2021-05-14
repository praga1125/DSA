class  Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binaryTree{
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

    maxPathSum(root){
      let max = -Infinity;
      let maxSum = (root) => {
        if(!root){
          return 0;
        } 
        let left = maxSum(root.left);
        let right = maxSum(root.right);
        max = Math.max(max, root.data + left + right);
        return Math.max(0, root.data+left, root.data+right);
      }
      maxSum(root);
      return max;
    }
}

let obj = new binaryTree();
let arr = [5, 3, -4, -2, 8, 7, -9];
console.log(`The given binary tree is : ${arr}`);
for(let i of arr){
  obj.insertNode(i);
}
let result = obj.maxPathSum(obj.root);
console.log(`The maximum path sum  of the binary tree is : ${result}`);