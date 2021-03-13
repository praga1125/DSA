let Stack = function() {
    this.queue = [];
    this.temp = [];
}

Stack.prototype.push = function(value) {
    this.queue.push(value);
    console.log(`new value pushed into the stack : ${value}`);
    return this.queue;
}

Stack.prototype.pop = function() {
    while (this.queue.length > 1){
        this.temp.push(this.queue.shift());
    }
    console.log(`The popped element is : ${this.queue.shift()}`);
    this.queue = this.temp;
    this.temp = [];
    return this.queue;
}

Stack.prototype.top = function() {
    while (this.queue.length > 1){
        this.temp.push(this.queue.shift());
    }
    let element = this.queue.shift();
    this.temp.push(element);
    this.queue = this.temp;
    this.temp = [];
    return element;
}

Stack.prototype.empty = function() {
    if(this.queue.length === 0){
        return `The stack is empty..`
    }    
}
Stack.prototype.display = function() {
    console.log(`The elements in the stack`);
    console.log(this.queue);
}

let obj = new Stack();
console.log(obj.empty());
obj.push(5);
obj.push(6);
obj.push(7);
obj.push(8);
obj.push(9);
obj.push(10);
console.log(`The top of the element : ${obj.top()}`);
obj.display();
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());


