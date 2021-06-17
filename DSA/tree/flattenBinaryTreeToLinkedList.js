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

	flatten(root) {
		let head = null;
		const revPreOrder = (node) => {
			if (node.right) revPreOrder(node.right);
			if (node.left) revPreOrder(node.left);
			(node.left = null), (node.right = head), (head = node);
		};
		if (root) revPreOrder(root);
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
let arr = [5, 3, 4, 2, 8, 6, 9];
let root;
for (i of arr) {
	root = obj.insert(root, i);
}
obj.flatten(root);
