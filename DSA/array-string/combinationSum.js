function combinationSum(arr, target){
    const result = [];
    function permute(arr1=[], sum=0, idx=0) {
        if(sum > target) {
            return;
        }
        if(sum === target){ 
            result.push(arr1);
        }
        for(let i = idx; i < arr.length; i++) {
            permute([...arr1, arr[i]], sum+arr[i], i);
        }
    }
    permute();
    return result;
}

let arr = [2, 3, 6, 7];
console.log(`The given array is : ${arr}`);
let target = 7;
console.log(`The target element is : ${target}`);
let result = combinationSum(arr, target);
console.log(`The combination of sum elements :`);
console.log(result);
