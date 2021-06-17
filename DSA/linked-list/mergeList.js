class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class linkedList {
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

	mergeList(list1, list2) {
		let tempNode = new Node(0);
		let currentNode = tempNode;
		while (list1 && list2) {
			if (list1.data < list2.data) {
				currentNode.next = list1;
				list1 = list1.next;
			} else {
				currentNode.next = list2;
				list2 = list2.next;
			}
      currentNode = currentNode.next;
		}
    currentNode.next = list1 || list2 ;
    return tempNode.next;
	}

	printList(node) {
		let str = "";
		while (node) {
			str += String(node.data) + " => ";
			node = node.next;
		}
		console.log(str);
	}
}

let obj1 = new linkedList();
let obj2 = new linkedList();
let obj3 = new linkedList();
const list1 = [1, 2, 7];
const list2 = [1, 4, 6, 8];
for (let i = 0; i < list1.length; i++) {
	obj1.insert(list1[i]);
}
for (let j = 0; j < list2.length; j++) {
	obj2.insert(list2[j]);
}
console.log(`The given two linked list are :`);
obj1.printList(obj1.head);
obj1.printList(obj2.head);
let result = obj3.mergeList(obj1.head, obj2.head);
console.log(`The merged linked list is :`);
obj3.printList(result);
