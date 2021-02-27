let shellSort = (arr) => {
    let gap = Math.floor(arr.length/2);
    while(gap > 0){
        for(let i=gap;i<arr.length;i++){
            let temp = arr[i];
            let j=i;
            while(j >= gap && arr[j-gap] > temp){
                arr[j] = arr[j-gap];
                j -= gap;
            }
            arr[j]= temp;
        }
        gap = Math.floor(gap/2); 
    }
    return arr;
}
let arr = [5, 7, 3, 1, 9, 2, 0, 10];
console.log(`The given array : ${arr}`);
let result = shellSort(arr);
console.log(`The sorted array : ${result}`);