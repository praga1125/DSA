let longestSubString = (str) => {
    let maxLen = 0, maxStr = '', posIndx, temp;
    for(let i=0; i<str.length; i++){
        temp = str[i];
        posIndx = maxStr.indexOf(temp);
        if(posIndx > -1){
            maxStr = maxStr.substring(posIndx + 1);
        }
        maxStr += temp;
        maxLen = Math.max(maxLen, maxStr.length);
    }
    return maxLen;
}

let str = "abczaala";
console.log(`The given string is : ${str}`);
const result = longestSubString(str);
console.log(`The length of the longest substring : ${result}`);