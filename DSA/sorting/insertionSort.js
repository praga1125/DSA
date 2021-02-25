let insertionSort = (arr) => {
    for(let i=0;i<arr.length;i++){
        let value = arr[i];
        let j = i-1;
        for(;j >= 0 && arr[j] > value;j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = value;
    }
    return arr;
}
let arr = [5, 2, 8, 1, 7, 9, 3, 0];
console.log(`The given array is : ${arr}`);
const result = insertionSort(arr);
console.log(`The sorted array is : ${result}`);
