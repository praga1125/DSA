//find the majority Element in more than n/3 times
function majorityElement(nums){
  let n = nums.length;
  let count1 = 0, count2 = 0, candidate1 = 0, candidate2 = 1;
  if(n < 1){
    return [];
  }
  if(n < 2){
    return nums;
  }
  for(let i = 0; i < n; i++){
    if (nums[i] == candidate1){
      count1++;
    }
    else if (nums[i] == candidate2){ 
      count2++;
    }
    else if (count1 == 0){
      candidate1 = nums[i];
      count1 = 1;
    } 
    else if (count2 == 0) {
      candidate2 = nums[i];
      count2 = 1;
    } 
    else {
      count1--;
      count2--;
        }
  }
  let result = [];
  if(nums.count(candidate1) > n/3){
    result.push(candidate1);
  }
  if(nums.count(candidate2) > n/3){
    result.push(candidate2);
  }
  return result;
}

Array.prototype.count = function(num){
  let count = 0;
    for (let i = 0; i < this.length; i++){
        if (this[i] == num) {
          count++;
        }
    }
  return count;
}

let arr = [3, 2, 3];
console.log(`The given array is : ${arr}`);
let result = majorityElement(arr);
console.log(`The majority element is : ${result}`);