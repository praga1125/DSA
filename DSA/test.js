function countInversions(arr) {
let count = 0;
function swap(arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergedArr = [];
    let remainder;
    while(i !== arr1.length && j !== arr2.length){
        if(arr1[i] < arr2[j] || arr1[i] === arr2[j]){
            mergedArr.push(arr1[i]);
            i++;
        }
        else{
            mergedArr.push(arr2[j]);
            count += (arr1.length - i);
            j++;
        }
    }
    remainder = i >= j ? arr2.slice(j) : arr1.slice(i);
    return mergedArr.concat(remainder);
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle, arr.length));

    return swap(left, right);
}
mergeSort(arr);
return count;
}

let arr = [8, 4, 2, 1];
console.log(`The given array is : ${arr}`);
let result = countInversions(arr);
console.log(`The counted inversions of array : ${result}`);