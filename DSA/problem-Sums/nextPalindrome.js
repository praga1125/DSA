function isPalindrome(num) {
  let n,
    rem,
    rev = 0;
  n = num;
  while (num != 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (n == rev) {
    return 1;
  } else {
    return 0;
  }
}
let num = 9687;
console.log(`given input is : ${num}`);
while (isPalindrome(num) == 0) {
  num = num + 1;
}
console.log(`Next Palindrome : ${num}`);
