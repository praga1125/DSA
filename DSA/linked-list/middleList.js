class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insert(data){
        let node = new Node(data);
        if(this.head == null){
            this.head = node;
        }
        else{
            this.tail.next = node;
        }
        this.tail = node;
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
let arr = [5, 6, 7, 9, 10];
for(i of arr){
    obj.insert(i)
}
let result = obj.middleNode(obj.head);
console.log(`The middle of the linked list is : ${result.data}`);