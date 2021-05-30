let unique = (words) => {
    for(let i = 0; i < words.length; i++){
        let ch = words[i];
        if(words.indexOf(ch) == i && words.indexOf(ch, i+1) == -1)
        return i;
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
