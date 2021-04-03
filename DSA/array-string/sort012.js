function sorted(arr){
    let low = 0, high = arr.length-1, mid = 0;
    let temp = 0;
    while(mid <= high){
        if(arr[mid] == 0){
            temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        }
        else if(arr[mid] == 1){
            mid++;
        }
        else{
            temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
console.log(`The given array is : ${arr}`);
sorted(arr);
console.log(`The sorted array is : ${arr}`);