class Node {
	constructor(data) {
		this.value = data;
		this.left = null;
		this.right = null;
	}
}
class binarySearchTree {
  constructor () {
    this.ans = [];
  }
	insert(root, data) {
		if (root == null) {
			root = new Node(data, null, null);
		} else if (data < root.value) {
			root.left = this.insert(root.left, data);
		} else {
			root.right = this.insert(root.right, data);
		}
		return root;
	}

	inOrder(node) {
		if (node !== null) {
			this.inOrder(node.left);
      this.ans.push(node.value);
			this.inOrder(node.right);
		}
    return this.ans;
	}
}

let obj = new binarySearchTree();
let arr = [1, 3, 2, 4, 0];
let root;
console.log(`The given binary tree is :`);
console.log(arr);
for (i of arr) {
	root = obj.insert(root, i);
}
let result = obj.inOrder(root);
console.log(`The inOrder traversal of BST is :`);
console.log(result);
