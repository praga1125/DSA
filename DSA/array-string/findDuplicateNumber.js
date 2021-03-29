function findDuplicate(arr){
    let slow = arr[0];
    let fast = arr[arr[0]];
    
    while (slow != fast) { 
        slow = arr[slow];
        fast = arr[arr[fast]];
    }
    
    slow = 0;
    
    while (slow != fast) {
        slow = arr[slow];
        fast = arr[fast];
    }
    
    return slow;
}

let arr = [1, 2, 3, 2, 4, 4];
console.log(`The given array is : ${arr}`);
let result =  findDuplicate(arr);
console.log(`The duplicated element is : ${result}`);