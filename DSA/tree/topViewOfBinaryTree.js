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
  }
  insertNode(value){
    let node = new Node(value);
    if(this.root == null){
      this.root = node;
    }
    let current = this.root;
    while(current){
      if(value == current.data){
        return current.data;
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

  topView(root, hash){
    let result = [];
    this.root.level = 0;
    hash.set(0,this.root);
     function buildTopView(node){
        let left = node.left;
        let right = node.right;
        if(left != null){
          left.level = node.level - 1;
        if(!hash.get(left.level)){
          hash.set(left.level, left);
       }
        buildTopView(left);
       }
         if(right != null){
           right.level = node.level + 1;
           if(!hash.get(right.level)){
             hash.set(right.level, right);
          }
          buildTopView(right);
        }
        else
         return;
   }
  buildTopView(this.root, 0);
   var resultMap = new Map([...hash.entries()].sort());
   for(let [k,v] of resultMap){
     result.push([v.data]);
    }
   return result.sort();
   }
}

let arr = [5, 3, 4, 2, 1, 8, 7, 9];
let obj = new binaryTree();
for(let num of arr){
  obj.insertNode(num);
}
let hashmap = new Map();
const result = obj.topView(obj.root, hashmap);
console.log(result);