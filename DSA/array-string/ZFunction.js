function repeatedSubString(str) {
  let n = str.length;
  let z = zFunction([...str]);
  for(let i = 0; i <= n/2 ; i++){
    if(z[n - i] + z[i] == n){
      return true;
    }
  }
  return false;
}

function zFunction(arr) {
  let n = arr.length;
  let temp, left = 0, right = 0;
  for(let i = 1; i < n; i++){
    if(i <= right){
      temp[i] = Math.min(right-i+1, temp[i - left]);
    }
    while(i + temp[i] < n &&  arr[i + temp[i]] == arr[temp[i]]) {
      temp[i]++;
    }
    if(i+temp[i]-1 > right){
      right = i + temp[i] - 1;
      left = i; 
    }
  }
  return temp;
}

let str = "abcabcabc";
let result = repeatedSubString(str);
console.log(result);