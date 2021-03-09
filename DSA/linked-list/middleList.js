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
  middleNode(head) {
    let low = head, high = head;
    while (high && high.next) {
        low = low.next;
        high = high.next.next;
    }
    return low;
}
}

const obj = new linkedList();
obj.addElements(20);
obj.addElements(22);
obj.addElements(25);
obj.addElements(23);
obj.addElements(44);
let result = obj.middleNode(obj.head);
console.log(`The middle of the linked list is : ${result.data}`);