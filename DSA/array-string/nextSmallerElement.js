function nextSmallerElement(arr){
    let length = arr.length;
    let result = [...Array(length)].map(() => -1);
    let stack = [];
    for(let i = 0 ; i < length ; i++){
        let stackTopVal = stack[ stack.length - 1] && stack[ stack.length - 1].val;
        if(!stack.length || arr[i] > stackTopVal ){
            stack.push({ val: arr[i], ind: i} );
        } 
        else {
            while( arr[i] < (stack[ stack.length - 1] && stack[ stack.length - 1].val) ){
                result[stack.pop().ind] = arr[i];
            }
            stack.push({ val: arr[i], ind: i});
        }
    }
    return result;
}

let arr = [6, 4, 2, 7, 1, 4];
console.log(`The given array is :`);
console.log(arr);
let result = nextSmallerElement(arr);
console.log(`The next smaller elements are :`);
console.log(result);