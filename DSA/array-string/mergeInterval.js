//here is an another approach of merge intervals in O(n)
function merge(arr){
    if(arr.length <= 1){
        return arr;
    }
    arr.sort((a, b) => a[0] - b[0]);
    for(let i=0; i<arr.length; i++){
        let current = arr[i];
        let next = arr[i+1];
        if (i !== arr.length - 1 && current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1]);
            arr.splice(i, 2, current);
            i--;
          }
        }      
    return arr;
}

let arr = [[1,3], [2, 4], [2, 6], [8, 9], [8, 10], [9, 11], [15, 18], [16, 17]];
console.log(`The given array is : `);
console.log(arr);
let mergedIntervals = merge(arr);
console.log(`The merged intervals are :`);
console.log(mergedIntervals);