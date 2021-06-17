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
        else{
            this.tail.next = node;
        }
        this.tail = node;
    }

    makeCycle(head, indx){
        let temp = head;
        let count = 0;
        while(count < indx){
            temp = temp.next;
            count += 1;
        }
        let connector = temp;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = connector;
        return head;
    }

    hasCycle(head){
        let tortoise = head;
        let hare = head;
        while (hare && hare.next) {
            tortoise = tortoise.next
            hare = hare.next.next   
            if (tortoise === hare) {
                return true;
            }
        }
        return false;
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
let arr =  [1, 2, 3];
for(i of arr){
    obj.insert(i);
}
console.log(`The given linked list is :`);
obj.printList(obj.head);
obj.makeCycle(obj.head, 2);
let result = obj.hasCycle(obj.head);
if(result){
    console.log(`The linked list has a cycle`);
}
else {
    console.log(`The linked list has not a cycle`);
}