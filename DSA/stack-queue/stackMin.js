class minStack{
    constructor(){
        this.data = [];
    }

    push(value){
        this.data.push({
            data : value,
            min : this.data.length == 0 ? value : Math.min(value, this.getMin())
        });
    }

    pop(){
        this.data.pop();
    }

    top(){
        return this.data[this.data.length - 1].data;
    }
    
    getMin(){
        return this.data[this.data.length - 1].min;
    }
}

let value = [-1, 3, -4, 6, -7, 8];
console.log(`The given stack is :`);
console.log(value);
let obj = new minStack();
for(let i of value){
    obj.push(i);
}
let top = obj.top();
let result  = obj.getMin();
console.log(`The minimum stack value is : ${result}`);
