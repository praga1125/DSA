class node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    addElements(elements){
        let node1 = new node(elements);
        if(this.head == null){
            this.head = node1;
        } else {
       let current = this.head;
       while(current.next){
           current = current.next;
       }    
       current.next = node1;
    }  
    this.size++ ;
 }

 removeNthNode(head , target){
    let left, before, right = head;
  left = before = {next: head}; 
  while (target--) right = right.next;
  while (right) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return before.next;
}
printList(list){ 
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
obj.addElements(2);
obj.addElements(1);
obj.addElements(3);
obj.addElements(6);
obj.addElements(4);
console.log(`The given linked list :`);
obj.printList(obj.head)
let result = obj.removeNthNode(obj.head, 3);
console.log(`The deleted linked list :`);
obj.printList(result);

