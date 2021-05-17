function mergeSortList(arr1, m, arr2, n){
  while(n){
    if (arr1[m - 1] > arr2[n - 1]) {
      arr1[m + n - 1] = arr1[m - 1];
      m--;
    } 
    else {
      arr1[m + n - 1] = arr2[n - 1];
      n--;
    }
  }
  return arr1;
}

let arr1 = [1, 2, 3, 0, 0, 0];
console.log(`The given array 1 is : [${arr1}]`);
let arr2 = [5, 6, 7];
console.log(`The given array 2 is : [${arr2}]`);
let m = 3, n = 3;
let result = mergeSortList(arr1, m, arr2, n);
console.log(`The merged sorted list is : [${result}] `);
