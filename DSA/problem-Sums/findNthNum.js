let arr = [3, 4];
let n = 50;
let x = 2;
for(let i = 0; i < n; i++) {
  arr[i+x] = (arr[i] * 10) + 3;
  x++;
  arr[i+x] = (arr[i] * 10) + 4;
}

console.log(`The number system is : `);
console.log(arr);
console.log(`The ${n}th Number of the number system is :${arr[n]}`);