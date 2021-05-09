function getPermutation(n, k){
  let arr = [... Array(n + 1).keys()];
  arr.shift();
  function helper(currN, currK ,fact){
    if(currN === 0) return "";
        
    let numIndex =  Math.floor(currK/fact);
    let num = arr[numIndex];
    let nextK = (currK % fact);
    
    arr.splice(numIndex, 1);
    return num + "" + helper(currN-1, nextK, fact/(currN-1)); 

  }
  let fact = factorial(n - 1);
  return helper(n, k-1, fact);
}

function factorial(num){
  if(num == 1){
    return 1;
  }
  return num * factorial(num-1);
}

let n = 3, k = 2;
console.log(`The given n and Kth value is : ${n} , ${k}`);
let result = getPermutation(n, k);
console.log(`The Kth permutation values is : ${result}`);