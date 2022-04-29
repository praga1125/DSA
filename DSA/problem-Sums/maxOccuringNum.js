function countOccurrences(num, digit) {
  let count = 0;
  while (num > 0) {
    if (num % 10 == digit) count++;
    num = parseInt(num / 10);
  }
  return count;
}
function maxOccurring(num) {
  if (num < 0) num = -num;
  let result = 0;
  let max_count = 1;
  for (digit = 0; digit <= 9; digit++) {
    let count = countOccurrences(num, digit);
    if (count >= max_count) {
      max_count = count;
      result = digit;
    }
  }
  return result;
}
let num = 55566677111188;
console.log("Max occurring digit is " + maxOccurring(num));
