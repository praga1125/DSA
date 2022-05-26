let dp = new Array(1001);
for (let i = 0; i < 1001; i++) {
  dp[i] = new Array(1001).fill(-1);
}

function longestPalindrome(s1, s2, n1, n2) {
  if (n1 == 0 || n2 == 0) {
    return 0;
  }
  if (dp[n1][n2] != -1) {
    return dp[n1][n2];
  }
  if (s1[n1 - 1] == s2[n2 - 1]) {
    return (dp[n1][n2] = 1 + longestPalindrome(s1, s2, n1 - 1, n2 - 1));
  } else {
    return (dp[n1][n2] = Math.max(
      longestPalindrome(s1, s2, n1 - 1, n2),
      longestPalindrome(s1, s2, n1, n2 - 1)
    ));
  }
}

let str = "malayalam is malayalam",
  temp;
  console.log(`The input is : ${str}`);
temp = str.split('').reverse().join("");
let res = longestPalindrome(temp, str, str.length, str.length);
console.log(`The length of the longest palindrome subsequence : ${res}`);
