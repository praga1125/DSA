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
	makeCycle(head, indx) {
		let temp = head;
		let count = 0;
		while (count < indx) {
			temp = temp.next;
			count++;
		}
		let connector = temp;
		while (temp.next != null) {
			temp = temp.next;
		}
		temp.next = connector;
		return head;
	}
	checkCycle(head) {
		if (!head || !head.next || !head.next.next) return null;
		let slow = head.next;
		let fast = head.next.next;
		while (slow !== fast) {
			slow = slow.next;
			if (!slow) return null;
			fast = fast.next;
			if (!fast) return null;
			fast = fast.next;
			if (!fast) return null;
		}
		fast = head;
		while (slow !== fast) {
			slow = slow.next;
			fast = fast.next;
		}
		return fast;
	}
}

let arr = [1, 3, 2, 0, -4];
console.log(`The given LinkedList is ${arr}`);
let indx = 3;
let obj = new LinkedList();
for (i of arr) {
	obj.insert(i);
}
obj.makeCycle(obj.head, indx);
let result = obj.checkCycle(obj.head);
console.log(result);
console.log(`tail connects to node index ${result.data}`);
