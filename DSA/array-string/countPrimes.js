function countPrimes(num) {
  let isPrime = new Array(num).fill(true);
  isPrime[1] = false;
  for(let i = 2; i * i < num; i++) {
    if(!isPrime[i]) {
       continue;
    }
    for(let j = i * i; j < num; j += i){
       isPrime[j] = false;
    }
  }
  let count = 0;
  for(let i = 1; i < num; i++){
    if(isPrime[i]) {
      count++;
  }
 }
  return count;
}

let num = 10;
console.log(`The given number is : ${num}`);
let result = countPrimes(num);
console.log(`There are ${result} prime numbers less than ${num}`);