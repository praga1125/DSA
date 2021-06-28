function removeDuplicates(nums) {
	let set = new Set(nums);
  let arr = Array.from(set);
  let temp = nums.length - arr.length;
  for(let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }
  for(let i = 0; i < temp; i++) {
    nums.pop();
  }
  return nums;
} 

let arr = [1, 1, 2, 2, 4, 4, 7, 7];
console.log(`The given array is : ${arr}`);
let result = removeDuplicates(arr);
console.log(`The removed duplicates array is : ${result}`);
