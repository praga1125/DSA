const nums = [2,3,-2,4];
console.log(`The given input is : ${nums}`);
let prevMax = nums[0], prevMin = nums[0], result = nums[0], curMax, curMin;
function maxProduct(nums){
    for(let i = 1; i < nums.length; i++) {
        curMax = Math.max(nums[i] * prevMax, nums[i] * prevMin);
        curMin = Math.min(nums[i] * prevMin, nums[i] * prevMax);
        prevMax = curMax;
        prevMin = curMin;
        result = Math.max(curMax, result);
    }
    return result;
}

const res = maxProduct(nums);
console.log(`The maximum product is : ${res}`);