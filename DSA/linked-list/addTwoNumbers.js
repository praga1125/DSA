class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
	}
}
class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	addElements(elements) {
		let node1 = new Node(elements);
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
	addTwoNumbers(l1, l2) {
		let temp = new Node();
		let plusOne = 0;
		let firstList = l1,
			secondList = l2,
			addedList = temp;

		while (firstList || secondList) {
			const sum =
				((firstList && firstList.data) || 0) +
				((secondList && secondList.data) || 0) +
				plusOne;
			if (sum >= 10) {
				plusOne = 1;
			} else {
				plusOne = 0;
			}
			addedList.next = new Node(sum % 10);
			addedList = addedList.next;
			firstList = firstList && firstList.next;
			secondList = secondList && secondList.next;
		}
		if (plusOne) {
			addedList.next = new Node(1);
		}
		return temp.next;
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

let arr1 = [5, 6, 7, 8, 9];
let arr2 = [1, 2, 3, 4, 5];
let obj1 = new LinkedList();
let obj2 = new LinkedList();
for (let i = 0; i < arr1.length; i++) {
	obj1.addElements(arr1[i]);
	obj2.addElements(arr2[i]);
}
console.log(`The given linked list 1 is :`);
obj1.printList(obj1.head);
console.log(`The given linked list 2 is :`);
obj1.printList(obj2.head);
let result = obj1.addTwoNumbers(obj1.head, obj2.head);
console.log(`The addition of two linked list :`);
obj1.printList(result);
