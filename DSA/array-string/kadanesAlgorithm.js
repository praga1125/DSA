//program sum of maximum sub array  implementation using kadane's algorithm...
function maximumSubArray(arr){
    let max = arr[0];
    let current = Math.max(max, 0);
    for(let i=0; i<arr.length; i++){
        current += arr[i];
        max = Math.max(max, current);
        current = Math.max(current, 0);
    }
    return max;
}

let arr = [-4, 5, -1, 7, -8, 9, -2, -1, 10];
console.log(`The given array is : ${arr}`);
let result = maximumSubArray(arr);
console.log(`The sum of maximum sub array : ${result}`);