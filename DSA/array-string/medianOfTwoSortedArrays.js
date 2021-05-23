// here is a another approach of find the median of sorted two arrays
const findMedian = (num1, num2) => {
  const len = num1.length + num2.length;
  const mid = len / 2 + 1 | 0;
  let i = 0, j = 0, k = 0, last, beforeLast;
  while(i++ < mid) {
    beforeLast = last;
    last = num1[j] < (num2[k] ?? Infinity) ? num1[j++] : num2[k++]; // ?? using nullish coalescing operator
  } 
  return len % 2 === 1 ? last : (last + beforeLast) / 2;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [7, 8, 9, 11, 12];
console.log(`The given two sorted array are : `);
console.log(arr1);
console.log(arr2);
const result = findMedian(arr1, arr2);
console.log(`The median Of the given two sorted arrays : ${result}`);