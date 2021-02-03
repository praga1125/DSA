function search(arr, target){
    let key = target % arr.length;
    let index = key;
    while(arr[index]!= target){
        index = (index+1) % arr.length;
        if(index == key){
            return "Element not found";
        }
    }
    return "Element Found";
}
const arr = [1, 5, 7, 8, 9, 14, 22];
const target = 11;
const result = search(arr, target);
console.log(result);