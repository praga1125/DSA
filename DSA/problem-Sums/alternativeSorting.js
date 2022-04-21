const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(`The given input is :`);
console.log(arr);
arr.sort((a, b) => a - b);
let result = [];
let a = 0,
  b = arr.length - 1;
while (result.length < arr.length) {
  result.push(arr[b]);
  if (a != b) {
    result.push(arr[a]);
  }
  a++;
  b--;
}
console.log(`The alternative sorting array is : `);
console.log(result);
