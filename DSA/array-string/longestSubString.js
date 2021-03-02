let longestSubString = (str) => {
    let maxLen = 0, maxStr = '',posindx,temp;
    for(let i=0;i<str.length;i++){
        temp =str[i];
        posindx =   maxStr.indexOf(temp);
        if(posindx > -1){
            maxStr = maxStr.substring(posindx + 1);
        }
        maxStr += temp;
        maxLen = Math.max(maxLen, maxStr.length);
}
return maxLen;
}
let str = "Welloperated";
const result = longestSubString(str);
console.log(`The length of the longest substring : ${result}`);