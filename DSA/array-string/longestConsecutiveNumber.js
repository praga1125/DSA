function longestConsecutive(arr){
    if(arr == null || arr.length == 0){
        return null;
    }
    let set = new Set(arr);
    let max = 0;
    for(let nums of set){
        if(set.has(nums-1)){
            continue;
        }
        let currNum = nums;
        let currMax = 1;
        while(set.has(currNum+1)){
            currNum++;
            currMax++;
        }
        max = Math.max(max, currMax);
    }
    return max;
}

let arr = [200, 8, 300, 1, 0, 20, 11, 2, 31, 4, 5, 3, 6, 7, 81]
console.log(`The given array is : ${arr}`);
let result = longestConsecutive(arr);
console.log(`The length of the longest consecutive sequence : ${result}`);
