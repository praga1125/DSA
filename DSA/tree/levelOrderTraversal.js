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
    return Bfs(root ? [root] : []);
     
   function Bfs(nodes, result = []){
      if(nodes.length == 0){
        return result;
      }
      let valuesRow = [], newNodes = [];
      for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
         valuesRow.push(node.data);
         node.left && newNodes.push(node.left);
         node.right && newNodes.push(node.right);
      }
      result.push(valuesRow);
      return Bfs(newNodes, result);
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