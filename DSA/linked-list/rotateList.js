class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList{
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

    printList(node){
        let str = "";
        while(node){
            str += String(node.data)+" => ";
            node = node.next;
        }
        console.log(str);
    }

    rotateList(head, count){
        let dummy = new Node();
        let slow = dummy;
        let fast = dummy;
        let length = 0;
        dummy.next = head;
        while(fast.next != null){
            fast = fast.next;
            length++;
        }
        count = count % length;
        for(let i=1; i<=length-count; i++){
            slow = slow.next;
        }
        console.log(dummy);
        fast.next = dummy.next;
        console.log(fast);
        dummy.next = slow.next;
        console.log(slow);
        slow.next = null;
        console.log(slow);
        return dummy.next;
    }
}

let obj = new LinkedList();
let arr = [1, 2, 3, 4, 5, 6];
for(let i of arr){
    obj.insert(i);
}
console.log(`The given linked list is :`);
obj.printList(obj.head);
rotateCount = 2;
let result = obj.rotateList(obj.head, rotateCount);
console.log(`The rotated linked list is :`);
obj.printList(result);