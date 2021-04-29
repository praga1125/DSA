/* Boyer moore's voting algorithm
const majorElement = (arr) => {
  let count = 0, candidate = 0;
  for(let num of arr){
    if(count == 0){
      candidate = num;
    }
    count += num == candidate ? 1 : -1;
  }
  return candidate;
}
*/ 

// using hashmap
const majorElement = (nums) => {
  let maps = {};
  for(let num of nums){
    maps[nums] = (maps[nums] || 0) + 1;
    if(maps[nums] > nums.length / 2)
    return num;
  }
}

let arr = [1, 2, 1, 2];
console.log(`The given array is : `);
console.log(arr);
let result = majorElement(arr);
console.log(`The major element is : ${result}`);
