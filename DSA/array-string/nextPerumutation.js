function nextPermutation(nums){
    for(let i = nums.length-1; i >= 0; i--){
        if(nums[i] < nums[i+1]){
            let large = nextLarge(i);
            swap(i , large);
            reverse(i+1);   
            return nums;
        }
    }
    //  nums.reverse();
    function swap(i, j){
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function reverse(indx){
    let start = indx, end = nums.length-1;
        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }

    function nextLarge(indx){
        for(let i = nums.length-1; i >= 0; i--){
            if (nums[i] > nums[indx]) {
                return i;
            }
        }
    }

}

let arr = [6, 2, 1, 5, 4, 3, 0];
console.log(`The given array is : ${arr}`);
let result = nextPermutation(arr);
if(result == undefined){
    console.log(`There is no next permutation`);
}
else {
    console.log(`The next permutation is : ${result}`);
}