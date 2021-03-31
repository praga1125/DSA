function groupAnagrams(words){
    words = words.sort();
    let mapping = {};
    for(let i=0; i<words.length; i++){
        let str = words[i];
        let sorted = str.split('').sort().join('');
        if(mapping[sorted] == undefined){
            mapping[sorted] = [str];
        }
        else{
            mapping[sorted].push(str);
        }
    }
    let result = [];
    for(let arr in mapping){
        result.push(mapping[arr]);
    }
    return result;
}

let words = ["cat", "bat", "tab", "loop", "pool", "ate", "eat", "tea"];
console.log(`The given array of words are :`);
console.log(words);
let result = groupAnagrams(words);
console.log(`The group of anagrams are :`);
console.log(result);