class hashTable{
    constructor(){
        this.arr = [];
        this.size = 5;
        for(let i = 0; i < this.size; i++){
            this.arr[i] = null;
        }
    }
    insert(data){
        let key =  data % this.size;
        let index = key;
        while(this.arr[index] != null){
            index = (index + 1) % this.size;
            if(index == key){
                return "Hashtable is full";

            }
        }
        this.arr[index] = data;
        return this.arr;
    }
     search(target){
        let key = target % this.size;
        let index = key;
        while(this.arr[index]!= target){
            index = (index+1) % this.size;
            if(index == key){
                return "Element not found";
            }
        }
        return "Element Found";
    }
    delete(data){
        let key =  data % this.size;
        let index = key;
        while(this.arr[index] != null){
            index = (index + 1) % this.size;
            if(index == key){
                return 0;
            }  
        } 
        this.arr[index] = -1;
        return 1;
    }
}
let obj = new hashTable();
obj.insert(1);
obj.insert(2);
obj.insert(3);
obj.insert(3);
// obj.insert(5);
let result = obj.insert(4);
let ans = obj.search(2);
console.log(ans);
let ans2 = obj.delete(1);
console.log(ans2);
console.log(result);


