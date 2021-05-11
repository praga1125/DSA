class Queue {
  constructor(data){
    this.items =  [];
  }
  enqueue(data){
    this.items.push(data);
  }
  dequeue(){
    return this.items.shift();                                                                                                                                        
  }
  front(){
    return this.items[0];
  }
  isEmpty(){
    return this.items.length == 0;
  }
}
class node{
  constructor(){
    this.color = 1;
    this.edge = Set();
  }
}