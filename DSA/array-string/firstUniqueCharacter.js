let unique = (words) => {
let map = {};
for(let character of words) {
    map[character] ? map[character]++ : map[character] = 1;
}

for(let i=0;i<words.length;i++){    
    if(map[words[i]] == 1){
        return i;
    }    
}
return -1;
}
const words = "manam";
const result = unique(words);
if (result == -1){
console.log(`contains no unique values`);
}
else{
console.log(`The first unique character index at : ${result}`);
}
