function wordBreak(str, target){
  if(target == null || target.length == 0){
    return false;
  }
  let set = new Set(target);
  let visited = new Set();
  let queue = [0];
  while(queue.length){
    let start = queue.shift();
    if(!visited.has(start)){
      for(let end=start+1; end<=str.length; end++){
        if(set.has(str.slice(start, end))){
          if(end == str.length){
            return true;
          }
        }
            queue.push(end);
      }
      visited.add(start);
   }
  }
   return false;
}

let str = "helloworldhello";
console.log(`The given word is :`);
console.log(str);
let target = ["hello", "world"];
console.log(`The given segmented word is :`);
console.log(target);
let result = wordBreak(str, target);
if (result) {
  console.log(`The word can be segmented`);
}
else{
  console.log(`The word cannot be segmented`);
}
