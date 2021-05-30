function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  let letters = new Array(28).fill(0), temp;
  for(let i = 0; i < str1.length; i++){ 
      temp = str1.charCodeAt(i) - 97;
      letters[temp]++;
  }
  for(let i =0; i < str2.length; i++){
    temp = str2.charCodeAt(i) - 97;
    if(letters[temp] == 0){
      return false;
    }
    letters[temp]--;
  }
  return true;
}

const str1 = "abc";
const str2 = "cab";
console.log(`The given strings are : ${str1} and ${str2}`);
const result = isAnagram(str1, str2);
if(result){
  console.log(`The Strings are valid anagrams`);
}
else {
  console.log(`The Strings are not valid anagrams`);
}