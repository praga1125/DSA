function longestCommonPrefix(str) {
  if(!str.length){
    return "";
  }
  let prefix = str[0];
  for(let i = 0; i < str.length; i++){
    while(str[i].indexOf(prefix) !== 0){
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}

let str = ["flip", "flop", "flower", "flow"];
console.log(`The given string array is : ${str} `);
let result = longestCommonPrefix(str);
console.log(`The longest common prefix is : ${result}`);