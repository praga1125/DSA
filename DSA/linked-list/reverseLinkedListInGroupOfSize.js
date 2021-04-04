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

insert(value){
    let node = new Node(value)
    if (this.head == null)
        this.head = node;
    else {
        let current = this.head;
        while (current.next) {
           current = current.next;
        }
           current.next = node;
        }
    }
rotate(K, head = this.head ){
    let current = head;
    let next = null;
    let prev = null;
    let i = 0;
    while(i < K && current != null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i++;
        }
    if(next != null)
      head.next = this.rotate(K,next);
      return prev;
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

let obj = new LinkedList();
let arr = [10, 20, 30, 40, 50, 60];
for(let i=0;i<arr.length;i++){
   obj.insert(arr[i]);
}
console.log(`The given linked list is :`);
obj.printList(obj.head);
let result = obj.rotate(3);
console.log(`The reversed linked list  is :`);
obj.printList(result);