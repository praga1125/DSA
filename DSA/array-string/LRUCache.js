class LRUCache {
    constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
    }
  
  get(key) {
    if (!this.cache.has(key)){
      return -1;
    }
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return this.cache.get(key);
  }
  
  put(key, value) {
     this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
       this.cache.delete(this.cache.keys().next().value);
    }
    return null;
  }  
}
  
let result = [];
let arr = [[3,3], [3], [1, 1], [2, 2], [1], [5, 5], [2], [4, 4], [1], [5], [4]];
console.log(`The given cache values are :`);
console.log(arr);
let limit = 2;
let obj = new LRUCache(limit);
for(let i=0; i<arr.length; i++){
    if(arr[i].length == 2){
        result.push(obj.put(arr[i][0], arr[i][1]));
    }
    else{
        result.push(obj.get(arr[i][0]));
    }
}
console.log(`The Least Recently used cache :`);
console.log(result);
