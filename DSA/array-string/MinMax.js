function MinMax(arr) {
    let minimum = arr[0], maximum = arr[0];
    for(let i=1; i<arr.length; i++) {
        minimum > arr[i] && (minimum = arr[i])
        maximum < arr[i] && (maximum = arr[i])
        // if(minimum > arr[i]) {
        //     minimum = arr[i];
        // } else if(maximum < arr[i]) {
        //     maximum = arr[i];
        // }
    }
    return { minimum, maximum }
}

const arr = [4, 3, 55, 7, 22]
const minMax = MinMax(arr);
console.log(minMax)