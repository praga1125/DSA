let nums = [1,4,6,8,0,41,3];
let largest = nums[0];
let secondlargest = nums[0];
for(let i=1;i<nums.length;i++){
    if (largest < nums[i]){
        secondlargest = largest;
        largest = nums[i];
    }
    else if(nums[i] < largest && nums[i] > secondlargest){
        secondlargest = nums[i];
    }
}
console.log(secondlargest);