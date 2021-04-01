class newNode{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}
class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insertNode(data){
        let node =  new newNode(data);
        if(this.head == null){
            this.head = node;
        }
        else{
            this.tail.next = node
        }
        this.tail = node;
    }
    printList(node){
        let curr = node; 
        let str = ""; 
        while (curr) { 
            str += curr.data + " -> "; 
            curr = curr.next; 
        }
        console.log(str);
    }
    deleteNode(node){
        if(node.data != undefined && node.next != undefined){
            node.data = node.next.data;
            node.next = node.next.next;
        }
    }
}

let list = new singlyLinkedList();
let arr = [13, 23, 45, 22, 11];
for(let i=0; i<arr.length; i++){
    list.insertNode(arr[i]);
}
console.log(`The before deletion in linkedlist :`);
list.printList(list.head);
let list1 = list.deleteNode(list.head.next.next);
console.log(`The after deletion in linkedlist :`);
list.printList(list.head);