// pre order traversal recursive method..
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

	preOrder(node) {
		if (node !== null) {
			this.ans.push(node.value);
			this.preOrder(node.left);
			this.preOrder(node.right);
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
let result = obj.preOrder(root);
console.log(`The postOrder traversal for the binary search tree :`);
console.log(result);
