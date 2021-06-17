// post order traversal recursive method..
class Node {
	constructor(data) {
		this.value = data;
		this.left = null;
		this.right = null;
	}
}
class binarySearchTree {
	constructor() {
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

	postOrder(node) {
		if (node !== null) {
			this.postOrder(node.left);
			this.postOrder(node.right);
			this.ans.push(node.value);
		}
		return this.ans;
	}
}

let obj = new binarySearchTree();
let arr = [1, 3, 2, 4, 0];
let root;
console.log(`The given BST is : `);
console.log(arr);
for (let i of arr) {
	root = obj.insert(root, i);
}
let result = obj.postOrder(root);
console.log(`The postOrder traversal for the binary search tree :`);
console.log(result);
