
const getReverseWords = (words) => {
    words = words.split(' ')
    let reversedWords = [];
    for(let i=words.length-1; i>=0; i--) {
        reversedWords.push(words[i]);
    }
    return reversedWords.join(' ');
}

let str = "praga loves kutty";
console.log(`The given string is : ${str}`);
let result = getReverseWords(str);
console.log(`The reversed string is : ${result}`);