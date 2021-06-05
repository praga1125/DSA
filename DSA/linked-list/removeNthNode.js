class node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}
class linkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	addElements(elements) {
		let node1 = new node(elements);
		if (this.head == null) {
			this.head = node1;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node1;
		}
		this.size++;
	}

	removeNthNode(head, target) {
	let list = [];
	let node = head;
	while(node != null) {
		list.push(node);
		node = node.next;
	}
	let targetNode = list[list.length - target - 1];
	if(target == list.length) {
		head  = head.next;
	}	else {
		targetNode.next = targetNode.next == null ? null : targetNode.next.next;
	}
	return head;
	}
	printList(list) {
		let curr = list;
		let str = "";
		while (curr) {
			str += curr.data + " -> ";
			curr = curr.next;
		}
		console.log(str);
	}
}

const obj = new linkedList();
let arr = [2, 1, 3, 6, 4];
for (let i of arr) {
	obj.addElements(i);
}
console.log(`The given linked list :`);
obj.printList(obj.head);
let result = obj.removeNthNode(obj.head, 2);
console.log(`The deleted linked list :`);
obj.printList(result);
