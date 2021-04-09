class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
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
    isPalindrome(head){
        let curr = head;
        const traverse = node => {
            if(node == null){
                return true;
            }
            const prevIsSame = traverse(node.next);
            const currSame = curr.data == node.data;
            curr = curr.next;
            return prevIsSame && currSame;
        }
        return traverse(head);
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
let arr = [5, 1, 2, 1, 5];
for(i of arr){
    obj.addElements(i);
}
console.log(`The given linked list is :`);
obj.printList(obj.head);
let result = obj.isPalindrome(obj.head);
if(result){
    console.log(`The linked list is palindrome`);
}
else {
console.log(`The linked list is not a palindrome`);
}
