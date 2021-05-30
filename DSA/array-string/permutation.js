function permutation (arr){
  let result = [];
  helper(arr, 0, result);
  return result;
}
function helper (arr, indx, result){
    if(indx == arr.length){
        result.push([...arr]);
    }
    for(let i = indx; i < arr.length; i++){
        swap(arr, indx, i);
        helper(arr, indx+1, result);
        swap(arr, indx, i);
    }
}

function swap (arr, i1, i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

let arr = ['a', 'b', 'c'];
let result = permutation(arr);
console.log(`The permutation of values : ${arr}`);
console.log(result);