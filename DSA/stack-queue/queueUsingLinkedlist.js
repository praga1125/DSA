let queue = { front: null, rear: null}

function node(data, next){
    this.data = data;
    this.next = next;
}

let enqueue = (element) => {
    let n = new node(element, null);
    if(queue.front == null){
        queue.rear = n;
        queue.front = n;
    } else {
        queue.rear.next = n;
        queue.rear = queue.rear.next;
    }
    console.log(`The enqueued element is : ${queue.rear.data}`);
}

function dequeue(){
    if(queue.front != null){
        let first = queue.front;
        queue.front = queue.front.next;
        return `The dequeued element is : ${first.data}`;
    }
     else{
         if(queue.rear != null)
         queue.rear = null;

         return `queue is empty`;
     }
}
enqueue(50);
enqueue(40);
enqueue(30);
enqueue(20);
enqueue(10);
console.log();
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
