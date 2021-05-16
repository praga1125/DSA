function KthLargestElement(arr, target){
  const indx =  arr.length - target;
  let left = 0;
  let right = arr.length - 1;
  while(left <= right){
    const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivotIndx =   pivotHelper(pivot, left, right);                                                                
    if(pivotIndx == indx){
      return arr[indx];
    }
    if(pivotIndx <  indx){
      left = pivotIndx + 1;
    }
    else {
      left = pivotIndx - 1;
    }
  }
   
  function pivotHelper(pivot, start, end){
    swap(pivot, end);
    let i = start;
    let j = start;
    while(j < end){
      if(arr[j] <= arr[end]){
        swap(i, j);
        i++;
      }
      j++;
    }
    swap(i, end);
    return i;
  }

  function swap(i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let arr = [3, 2, 1, 5, 6, 4], target = 2;
console.log(`The given array is : ${arr}`);
let result = KthLargestElement(arr, target);
console.log(`The ${target} largest element is : ${result}`);