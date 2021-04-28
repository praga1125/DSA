function StrStr(str, pattern){
  if(pattern == '' || str == pattern){
    return 0;
  }
  if(str.length < pattern.length){
    return -1;
  }
  for(let i=0; i<str.length-pattern.length+1; i++){
    if(str[i] == pattern[0]){
      for(let j=0; j<pattern.length; j++){
        if(pattern[j] != str[i+j]){
          break;
        }
        else if(j == pattern.length-1){
          return i;
        }
      }
    }
  }
    return -1;
}

let str = "helloPraga";
console.log(`The given string is : ${str}`);
let pattern = "aga";
console.log(`The given pattern string is : ${pattern}`);
let result = StrStr(str, pattern);
if(result != -1){
  console.log(`The string and pattern is matched in index of : ${result}`);
}
else{
  console.log(`The string and pattern are not matched`);
}