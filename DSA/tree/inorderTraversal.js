class node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree{
    constructor(){
        this.root = null;
    }
  insert(data){
      let newNode = new node(data);
      if(this.root == null){
          this.root = newNode;
      } 
      else{
          this.insertNode(this.root, newNode);
      }
    }
  insertNode(node1, newNode){
      if(newNode.data < node1.data){
          if(node1.left == null){
              node1.left = newNode;
          }
          else{
              this.insertNode(node1.left, newNode);
          }
      }
      else{
          if(node1.right == null){
              node1.right = newNode;
          }
          else{
              this.insertNode(node1.right, newNode);
          }
       }
  }
  inorder(root){
		let stack = [];
		let result = [];
		while(root || stack.length){
			while(root){
				stack.push(root);
				root = root.left;
				}
				root = stack.pop();
				result.push(root.data);
				root = root.right;
				}
			return result;
    }
}

let obj = new binarySearchTree();
let arr = [1, 3, 2, 4, 0];
console.log(`The given binary tree is :`);
console.log(arr);
for(i of arr){
	obj.insert(i);
}
let result = obj.inorder(obj.root);
console.log(`The inorder traversal of BST is :`);
console.log(result);
