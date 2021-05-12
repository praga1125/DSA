function fourSum(arr, target){
  arr.sort((a,b) => a - b);
  let  result = [];
  for(let i = 0; i < arr.length - 3; i++){
    for(let j = i+1; j < arr.length - 2; j++){
      let low = j + 1;
      let high = arr.length - 1;
      while(low < high){
        let sum = arr[i] + arr[j] + arr[low] + arr[high];
        if(sum == target){
          result.push([arr[i], arr[j], arr[low], arr[high]]);
          while(arr[low] == arr[low + 1]){
            low++;
          }
          while(arr[high] == arr[high - 1]){
            high--;
          }
          low++;
          high--;
        }
        else if(sum < target){
          low++;
        }
        else {
          high--;
        }
      }
      while(arr[j] == arr[j+1]){
        j++;
      }
    }
    while(arr[i] == arr[i+1]){
      i++;
    }
  }
  return result;
 }

let arr = [2, 2, 2, 2, 4, 4, -4, -4, 0];
console.log(`The given array is : ${arr} `);
let target = 8;
console.log(`The given target is : ${target}`);
let result = fourSum(arr, target);
console.log(`The array of all given target sum quadruplets `);
console.log(result);