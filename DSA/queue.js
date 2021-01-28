class queue{
    constructor(){
        this.item = [];
    }
 enqeue(values){
    this.item.push(values);
    return this.item;
  }
  dequeue(){
      if(this.item.length != 0){
        this.item.shift(); 
        return this.item;     
      }
 }
  isEmpty(){ 
    if(this.item.length == 0){
        console.log("The queue is empty");
    }
    }
 front(){
    console.log(`The front element is ${this.item[0]}`);
 }
 print(){
     console.log(this.item);
 }
}

let obj = new queue();
obj.isEmpty();
for(let i=1;i<6;i++){
    obj.enqeue(i);
}
obj.print();
obj.dequeue();
obj.dequeue();
obj.print();
obj.front();