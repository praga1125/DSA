class newNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class singlyLinkedlist {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	insertNode(data) {
		const node = new newNode(data);
		if (this.head == null) {
			this.head = node;
		} else {
			this.tail.next = node;
		}
		this.tail = node;
	}
}

let printList = (node) => {
	let result = "";
	while (node != null) {
		result += String(node.data) + " => ";
		node = node.next;
	}
	console.log(`The reversed LinkedList :`);
	console.log(result);
};

let reverseList = (head) => {
	let [prev, current] = [null, head];
	while (current) {
		[current.next, prev, current] = [prev, current, current.next];
	}
	return prev;
};

let arr = [1, 2, 3, 4, 5];
console.log(`The given list : ${arr}`);
let obj = new singlyLinkedlist();
for (let i = 0; i < arr.length; i++) {
	obj.insertNode(arr[i]);
}
let result = reverseList(obj.head);
printList(result);
