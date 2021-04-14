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
   insert(data){
    let node = new Node(data);
    if(this.head == null){
      this.head = node;
    }
    else {
      this.tail.next = node;
    }
    this.tail = node;
  }
   makeCycle(head, indx){
    let temp = head;
    let count = 0;
    while(count < indx){
      temp = temp.next;
      count++;
    }
    let connector = temp;
    while (temp.next != null){
      temp = temp.next;
    }
    temp.next = connector;
    return head;
  }
   checkCycle(head){
    let tortoise = head;
    let hare = head;
    let count  =  0;
    while (hare && hare.next && hare.next.next){
      tortoise = tortoise.next;
      hare = hare.next.next;
      if(tortoise == hare){
          tortoise = head;
          while(tortoise != hare){
            tortoise = tortoise.next;
            hare = hare.next;
            count++;
          }
          return count;
      }
    }
    return null;
  }
}

let arr = [3, 2, 0, -4];
console.log(`The given LinkedList is ${arr}`);
let indx = 3;
let obj = new LinkedList();
for(i of arr){
  obj.insert(i);
}
obj.makeCycle(obj.head, indx);
let result = obj.checkCycle(obj.head);
console.log(`tail connects to node index ${result}`);


