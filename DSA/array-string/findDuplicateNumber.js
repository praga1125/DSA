function findDuplicate(arr){
    let slow = arr[0];
    let fast = arr[arr[0]];
    
    while (slow != fast) { 
        slow = arr[slow];
        fast = arr[arr[fast]];
    }
    
    fast = 0;
    
    while (slow != fast) {
        slow = arr[slow];
        fast = arr[fast];
    }
    
    return slow;
}

let arr =[2 , 1, 1];
console.log(`The given array is : ${arr}`);
let result =  findDuplicate(arr);
if(result == undefined){
    console.log(`The array does not contains duplicate elements`);
}
else{
    console.log(`The duplicated element is : ${result}`);
}