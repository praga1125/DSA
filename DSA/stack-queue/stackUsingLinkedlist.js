let EX = {};

EX.StackNode = function(){
	this.item = null;
	this.next = null;
}

EX.LinkedStack = function(){
	let head = null;
	let size = null;
	
	this.pushToStack = function(item){
		let node = new EX.StackNode();
		node.item = item;
		node.next = null;
		if(size < 1 && head === null){
			head = node;
			head.next = null;
			size = 1;
		}
		else{
			var current = head;
			while(current.next !== null){
				current = current.next;
			}
			current.next = node;
			size += 1;
		}
	}
	this.popFromStack = function(){
		let current = head;
		if(size === 0){
			return;
		}
		if(size === 1){
			head = null;
			size = 0;
			return current;
		}
		let prev = current; 
		while(current.next !== null){
				prev = current;
				current = current.next;
		}
		prev.next = null;
		size -= 1;
		return current;
	}
	
	this.isStackEmpty = function(){
		return (size < 1) ? true : false;
	}
	
	this.stackTop = function(){
		let current = head;
		if(size > 0 && head !== null){
			while(current.next !== null){
				current = current.next;
			}
			return current.item;
		}else{
			console.log("There is no item in the stack");
			return null;
		}
	}
	
	this.printStack = function(){
		let current = head;
		while(current.next !== null){
			console.log("Item "+current.item + " is on the stack.");
			current = current.next;
		}
		console.log("Item "+current.item + " is on the stack.");
	}
	
}



let stack = new EX.LinkedStack();
stack.pushToStack(11);
stack.pushToStack(22);
stack.pushToStack(33);
stack.printStack();
let poped = stack.popFromStack();
console.log("Popped item is: " + poped.item);
stack.printStack();
