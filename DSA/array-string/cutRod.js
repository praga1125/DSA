const cutRod = (price, n) => {
  let value = new Array(n + 1);
  value[0] = 0;
  for(let i = 0; i <= n; i++){
    let max = Number.MIN_VALUE;
    for(let j = 0; j < i; j++){
      max = Math.max(max, price[j] + value[i - j - 1]);
    }
    value[i] = max;
  }                
   return value[n];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

let arr = [1, 5, 8, 9, 10, 17, 17, 20];
console.log(`The given array is :`);
console.log(arr);
let len = arr.length;
let result = cutRod(arr, len);
console.log(`The Maximum obtainable value is : ${result}`);