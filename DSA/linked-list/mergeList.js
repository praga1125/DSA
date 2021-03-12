 function Node(data, next) {
    this.data = data;
    this.next = next;
  } 

function merge(L1, L2) {
    let L3 = new Node(null, null);
    let prev = L3;
    
    while (L1 !== null && L2 !== null) {
      if (L1.data <= L2.data) { 
        prev.next = L1;
        L1 = L1.next;
      } else {
        prev.next = L2;
        L2 = L2.next;
      }
      prev = prev.next;
    }
    if (L1 === null){
        prev.next = L2; 
    }
    if (L2 === null){ 
        prev.next = L1; 
    }
    return L3;
    
  }
function printList(result){ 
    let curr = result.next; 
    let str = ""; 
    while (curr) { 
        str += curr.data + " -> "; 
        curr = curr.next; 
    }
    console.log(str); 
    }

  let n3 = new Node(10, null);
  let n2 = new Node(3, n3);
  let n1 = new Node(1, n2);
  let L1 = n1;
  
  let n6 = new Node(9, null);
  let n5 = new Node(6, n6);
  let n4 = new Node(5, n5);
  let L2 = n4; 
  
 let result = merge(L1, L2);
console.log(`The merged two Linked List:`);
 printList(result);
