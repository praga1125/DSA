function rabinKarp(str, target) {
  let prime = 1019;
  let value = 34;
  let position = [];
  let posHash = polyHash(target, prime, value);
  let  text; 
  let textHash;
  for(let j = 0; j <= (str.length - target.length); j++){
    text = str.slice(j, (j + target.length));
    textHash = polyHash(text, prime, value);
    if(posHash != textHash){
      continue;
    }
    if(isEqual(text, target)){
      position.push(j);
    }
  }
  return position;
  }

function polyHash(str, prime, value) {
  let hash = 0;
  for(let i=0; i<=str.length-1; i++){
    hash = (hash * value + str.charCodeAt(i)) % prime;
  }
  return hash;
}

function isEqual(str1, str2) {
  if (str1 != str2){
    return false;
  }
  for(let i=0; i<str1.length; i++){
    if (str1[i] != str2[i]){
      return false;
    }
  }
  return true;
}

let str = "PragahelloPraga";
console.log(`The given string is : ${str}`);
let target = "Praga";
console.log(`The given target string is : ${target}`);
let result = rabinKarp(str, target);
if(result != []){
console.log(`The pattern is matched at index of :`);
console.log(result);
}
else{
  console.log(`The pattern is not matched..`);
}