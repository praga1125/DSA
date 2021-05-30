class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	insert(data) {
		let node = new Node(data);
		if (this.head == null) {
			this.head = node;
		} else {
			this.tail.next = node;
		}
		this.tail = node;
	}

	reverse(node) {
		let [prev, head] = [null, node];
		while (head) {
			[head.next, prev, head] = [prev, head, head.next];
		}
		return prev;
	}

	printList(node) {
		let str = "";
		while (node != null) {
			str += String(node.data) + " => ";
			node = node.next;
		}
		console.log(str);
	}
}

let obj = new LinkedList();
let arr = [1, 2, 3, 4, 5, 6];
for (let i of arr) {
	obj.insert(i);
}
console.log(`The given linked list is :`);
obj.printList(obj.head);
let result = obj.reverse(obj.head);
console.log(`The reverse list is :`);
obj.printList(result);
