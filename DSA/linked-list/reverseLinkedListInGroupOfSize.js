class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
	}
}
class LinkedList {
	constructor(head = null, tail = null) {
		this.head = head;
		this.tail = tail;
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
	reversed(head, k) {
		if (k === 1 || !head) {
			return head;
		}
		let root = new Node(0, head);
		let curr = head;
		let prev = root;
		while (curr) {
			let tail = curr;
			let count = 0;
			while (curr && count < k) {
				curr = curr.next;
				count++;
			}
			if (count === k) {
				prev.next = reverse(tail, k);
				prev = tail;
			} else {
				prev.next = tail;
			}
		}
		return root.next;

		function reverse(head, k) {
			let prev = null;
			let curr = head;
			let next = null;

			while (curr && k > 0) {
				next = curr.next;
				curr.next = prev;
				prev = curr;
				curr = next;
				k--;
			}
			return prev;
		};
	}

	printList(node) {
		let result = "";
		while (node != null) {
			result += String(node.data) + " => ";
			node = node.next;
		}
		console.log(result);
	}
}

let obj = new LinkedList();
let arr = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < arr.length; i++) {
	obj.insert(arr[i]);
}
console.log(`The given linked list is :`);
obj.printList(obj.head);
let result = obj.reversed(obj.head, 3);
console.log(`The reversed linked list  is :`);
obj.printList(result);
