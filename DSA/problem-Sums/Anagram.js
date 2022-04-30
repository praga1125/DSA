let totalChar = 256;
function anagram(str1, str2) {
  let count1 = [], count2 = [];
  for (let i = 0; i < totalChar; i++) {
    count1[i] = 0;
    count2[i] = 0;
  }

  for (let i = 0; i < str1.length && i < str2.length; i++) {
    count1[str1[i].charCodeAt(0)]++;
    count2[str1[i].charCodeAt(0)]++;
  }
  if (str1.length != str2.length) return false;

  for (i = 0; i < totalChar; i++) if (count1[i] != count2[i]) return false;

  return true;
}

let str1 = "geeksforgeeks".split("");
let str2 = "forgeeksgeeks".split("");
if (anagram(str1, str2))
  console.log("The two strings are anagram of each other");
else console.log("The two strings are not anagram of each other");
