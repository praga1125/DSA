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
            this.tail.next = node
        }
        this.tail = node;
    }

    oddEvenList(head){
        if(!head){
            return head;
        }
        
        let odd = head;
        let even = head.next;

        while(odd.next && odd.next.next){
            let temp = odd.next;
            odd.next = odd.next.next;
            odd = odd.next;
            temp.next = odd.next;
        }
        odd.next = even;
        return head;
    }

    printList(node){
        let str = "";
        while(node != null){
            str += String(node.data) + " => ";
            node = node.next;
        }
        console.log(str);
    }
}

console.log(`The given linkedList is :`);
let arr = [1, 2, 3, 6, 5, 4];
let obj =  new LinkedList();
for(let i of arr){
    obj.insert(i);
}
obj.printList(obj.head);
let result = obj.oddEvenList(obj.head);
console.log(`The odd even linked list  is :`);
obj.printList(result);
