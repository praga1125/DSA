function reversePairs(nums){
  let reversePairs = 0;
  helper(nums);
  return reversePairs;
  
  function helper(nums){
    if(nums.length <= 1){
      return nums;
    }
    const length = nums.length;
    const left = helper(nums.slice(0, Math.floor(length / 2)));
    const right = helper(nums.slice(Math.floor(length / 2)));
    return merge(left, right);
  }

  function merge(left, right){
    const nums_sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] > 2 * right[rightIndex]){
        reversePairs += (left.length - leftIndex);
        rightIndex++;
      }
      else {
        leftIndex++;
      }
    }
    leftIndex = 0;
    rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] < right[rightIndex]){
        nums_sorted.push(left[leftIndex]);
        leftIndex++;
      }
      else {
        nums_sorted.push(right[rightIndex]);
        rightIndex++;
      }
    }
    while(leftIndex < left.length){
      nums_sorted.push(left[leftIndex]);
      leftIndex++;
    }
    while(rightIndex < right.length){
      nums_sorted.push(right[rightIndex]);
      rightIndex++;
    }
    return nums_sorted;
}
}

let nums = [1, 3, 2, 3, 1];
console.log(`The given array is : ${nums}`);
let result  = reversePairs(nums);
console.log(`The number of reversed pair is : ${result}`);