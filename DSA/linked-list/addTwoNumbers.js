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

  addElements(elements){
     let node1 = new Node(elements);
      if(this.head == null){
          this.head = node1;
      } 
			else {
       let current = this.head;
       while(current.next){
         current = current.next;
       }    
       current.next = node1;
    }
    this.size++ ;
  }
	addTwoNumbers(l1, l2) {
    let List = new Node(0);
    let head = List;
    let sum = 0;
    let carry = 0;
    while(l1!==null||l2!==null||sum>0){
        if(l1!==null){
            sum = sum + l1.data;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.data;
            l2 = l2.next;
        }
        head.next = new Node(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return List.next;
}

  printList(node){
  	let result = '';
  	while(node != null){
      result += String(node.data) + ' => ';
      node = node.next;
  	}
  	console.log(result);
   }
}

let arr1 = [5, 6, 7, 8, 9];
let arr2 = [1, 2, 3, 4, 5];
let obj1 = new LinkedList();
let obj2 = new LinkedList();
for(let i=0 ; i<arr1.length; i++){
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