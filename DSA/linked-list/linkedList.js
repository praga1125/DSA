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
    insertAt(data, index){
        if(index > 0 && index > this.size){
            return false;
        }
         else {
        let node1 = new node(data);
        let temp, prev;
        temp = this.head;
        if (index == 0) { 
            node1.next = this.head; 
            this.head = node1; 
        }
        else { 
            temp = this.head; 
            var it = 0;
            while (it < index) { 
                it++; 
                prev = temp; 
                temp = temp.next; 
            } 
            node1.next = temp; 
            prev.next = node1;
        }
        this.size++;
     }
 }
    deleteElement(data){
        let current = this.head;
        let prev = null;
        while(current != null){
            if(current.data === data){
                if(prev == null){
                    this.head = current.next;
                }
                else{
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    deleteAt(index){
        let prev, it = 0;
        let curr = this.head;
        prev = curr;
        if(index > 0 && index > this.size){
            return -1
        }
        else{
            if(index == 0){
                this.head = curr.next;
            }
            else{
                
                while(it < index){
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.data;
        }
    }
    printList(){ 
    let curr = this.head; 
    let str = ""; 
    while (curr) { 
        str += curr.data + " -> "; 
        curr = curr.next; 
    }
    console.log(str); 
    }  
    clearList() {
        this.head = null;
        this.size = 0;
    } 
}
const obj = new linkedList();
obj.addElements(20);
obj.addElements(22);
obj.addElements(23);
obj.addElements(44);
obj.insertAt(54, 0);
console.log(`The deleted element is : ${obj.deleteElement(54)}`);
console.log(`The deleted elements is : ${obj.deleteAt(2)}`);
// obj.clearList();
obj.printList();

