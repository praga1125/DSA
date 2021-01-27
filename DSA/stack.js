class stack{
     constructor(){
         this.item = [];
         this.control = 6;
     }
    insert(arr){
        if(arr.length <= this.control){
        for(let i=0;i<arr.length;i++){
        this.item.push(arr[i]);
        }
        console.log(this.item);
     } else {
         console.log("The stack is overflow");
     }

    }
    delete(){
        if(this.item != 0){
        console.log(`The deleted elements is : ${this.item[this.item.length-1]}`);
        this.item.pop();
        console.log(this.item);
        } else{
            console.log("The stack is empty");
        }
   }
    top(){
        if(this.item != 0){
        console.log(`The top of the stack : ${this.item[this.item.length - 1]}`);
        } else {
            console.log("The stack is empty");
        }
    }
    isEmpty(){
        if(this.item == 0){
            console.log("The stack is empty");
        }
    }
    isFull(){
        if(this.item.length == this.control){
        console.log("The stack is overflow");
        }
    }
}
let arr = [45, 23, 11, 33, 20 ]
let obj = new stack();
 obj.isEmpty();
 obj.insert(arr);
 obj.delete();
 obj.isEmpty();
 obj.isFull();
 obj.top();