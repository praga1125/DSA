let queue = function() {
	this.stack1 = [];
	this.stack2 = [];
}

queue.prototype.push = function(values) {
	this.stack1.push(values);
	console.log(`${values} : value is inserted into queue`);
}

queue.prototype.pop = function() {
	while(this.stack1.length !== 0){
		this.stack2.push(this.stack1.pop())
	}

	let pop = this.stack2.pop();

	while(this.stack2.length !== 0){
		this.stack1.push(this.stack2.pop())
	}
	return console.log(`The dequeued element is : ${pop}`);
}
queue.prototype.display = function() {
	console.log(`The values in the queue :`);
	console.log(this.stack1);
}

queue.prototype.isEmpty = function() {
	return this.stack1.length === 0 ? console.log(`queue is empty`) : console.log(`queue contains values`);
}

let obj = new queue();
let arr = [1, 2, 3, 4, 5];
obj.isEmpty();
for(let i=0;i<arr.length;i++){
	obj.push(arr[i]);
}
obj.display();
obj.pop();
obj.pop();
obj.display();



