function  nextGreaterElement(findNums, nums) {
    return findNums.map(n => {
        let found = nums.indexOf(n);
        
        if (found !== -1) {
            while (nums[++found] < n);
                if (found >= nums.length){
                    found = -1;
                }
            else{
                 found = nums[found];
            }
        }
        
        return found;
    });
}

let findNums = [1, 2];
console.log(`The find numbers are : ${findNums}`);
let nums = [5, 1, 6, 2, 0];
console.log(`The given numbers are : ${nums}`);
let result = nextGreaterElement(findNums, nums);
console.log(`The next greater elements are : ${result}`);

