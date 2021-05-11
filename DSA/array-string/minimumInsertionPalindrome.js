function minimumInsertion(str){
  const len = str.length;
  const dp = new Uint16Array(len);
  for(let i = len - 2 ; i >= 0; i--){
    let prev = 0;
    for(let j = i + 1; j < len; j++){
      const temp = dp[j];
      dp[j] =  str[i] == str[j] ? prev : 1 + Math.min(dp[j], dp[j - 1]);
      prev = temp;
    }
  }
  return dp[str.length -1];
}

let str = "pragaa";
console.log(`The given string is : ${str}`);
let result = minimumInsertion(str);
console.log(`The minimum ${result} insertions to make a palindrome`);