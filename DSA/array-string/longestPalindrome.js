function longestPalindrome(str){
   let temp = '';
 for (let i = 0; i < str.length; i++) {
   for (let j = 0; j < 2; j++) {
        let left = i;
        let right = i + j;
    while (str[left] && str[left] === str[right]) {
          left--;
          right++;
        }
        if ((right - left - 1) > temp.length) {
          temp = str.substring(left + 1, right);
        }
    }
  }
   return temp;
}

let str = "baaaabed";
console.log(`The given string is : ${str}`);
let result = longestPalindrome(str);
console.log(`The longest palindrome is : ${result}`);
