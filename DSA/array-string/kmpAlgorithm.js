function longestPrefix(str){
  let table = new Array(str.length);
  let maxPrefix = 0;
  table[0] = 0;
  for(let i = 1; i < str.length; i++){
    while(maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)){
      maxPrefix = table[maxPrefix - 1];
    }
    if(str.charAt(maxPrefix) == str.charAt(i)){
      maxPrefix++;
    }
    table[i] = maxPrefix;
  }
  return table;
}

 function kmpMatching(str, pattern){
  let prefixes = longestPrefix(pattern);
  let matches = [];
  let j = 0, i = 0;
  while(i < str.length){
    if(str.charAt(i) == pattern.charAt(j)){
      i++;
      j++;
    }
    if(j == pattern.length){
      matches.push(i-j);
      j = prefixes[j-1];
    }
    else if(str.charAt(i) != pattern.charAt(j)){
      if(j != 0){
        j = prefixes[j - 1];
      }
      else {
        i++;
      }
    }
  }
  return matches;
}

let str = "hello world, welcome you all ";
let pattern = "world";
let result = kmpMatching(str, pattern);
console.log(result);