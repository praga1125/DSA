function SubSetSum(arr, target){
  let sum = target;
  const temp = [];
  for(let i=0; i<=sum; i++){
    temp[i] = [];
    temp[i][0] = false;
    }     
  for(let i=0; i<=arr.length; i++){
    temp[0][i] = true;
   }      
  for(let i=1; i<=sum; i++){
    for(let j=1; j<=arr.length; j++){
       temp[i][j] = temp[i][j - 1];
      if(arr[j - 1] <= i){ 
        temp[i][j] = temp[i][j - 1] || temp[i - arr[j - 1]][j - 1];
         }
      }  
  }
  return temp[sum][arr.length] ? 1 : 0;
}

let arr = [1, 2, 2, 4, 5, 6];
console.log(`The given array is :`);
console.log(arr);
let sum = 0;
console.log(`The given sum value is : ${sum}`);
let result = SubSetSum(arr, sum);
if(result){
  console.log(`The array contains subset sum `);
}
else{
  console.log(`There is no subset sum in array`);
}