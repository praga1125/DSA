const majorityElement = (arr) => {
  let majorityIndx = 0;
  let count = 1;
  for(let i = 0; i < arr.length; i++){
    if(arr[majorityIndx] === arr[i]) {
      count++;
    } else {
      count--;
      if(!count) {
        majorityIndx = i;
        count = 1;
      }
    }
  }
  return arr[majorityIndx];
}

const arr = [2, 4, 2, 4, 2, 8];
console.log(`The given array is : ${arr}`);
const result = majorityElement(arr);
console.log(`The majority element of the given array is : ${result}`);