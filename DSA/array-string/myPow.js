function myPow(x, y){
  if(y == 0){
    return 1;
  }
  else if(y == 1){
    return x;
  }
  else if(y == -1){
    return 1/x;
  }
  else if(y%2 == 0){
    let result = myPow(x, y/2);
    return result * result;
  }
  else if(y%2 != 0){
    return  x*myPow(x, y-1);
  }
  else{
    console.log(`incorrect input..`);
  }
}

let num1 = 2.10000
let num2 = 3;
console.log(`The given values are :`);
console.log(`num1 : ${num1} , num2 : ${num2}`);
let result = myPow(num1, num2);
console.log(`The power of two numbers :`);
console.log(result); 
