let bubbleSort = (arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=0; j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let arr = [5, 1, 6, 9, 2, 4, 8];
console.log(`The given array : ${arr}`);
let result = bubbleSort(arr);
console.log(`The sorted array : ${result}`);