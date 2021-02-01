function binarySearch(array, target){
    let first = 0, last = array.length - 1;
    while (first <= last){
        let mid = Math.floor((first+last)/2);
        if (array[mid] == target){
            return mid;
        } 
        else if(array[mid] <  target){
            first = mid + 1;
        }
        else{
            last = mid - 1;
        }

    }
}
const array = [1, 3, 5, 7, 8, 9];
const target = 8;
let result = binarySearch(array, target);
if (result != undefined){
console.log(`The Element of ${target} is found at index of ${result}`);
}
else{
    console.log(`Element not found in array`);
}