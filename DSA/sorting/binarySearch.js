let binarySearch = (arr,target) => {
    let low = 0,high = arr.length-1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] < target){
            low  = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return -1;
}
const arr = [5, 6, 7, 8, 9, 10, 11];
console.log(`The given array is  : ${arr}`);
const target = 9;
console.log(`Search element is : ${target}`);
let result = -1;
result = binarySearch(arr,target);
if(result == -1){
    console.log(`search is not found`);
}
else{
    console.log(`search is found at index of ${result}`);
}
