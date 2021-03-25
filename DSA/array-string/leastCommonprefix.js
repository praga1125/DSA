function longestCommonPrefix(arr){
    if(!arr.length){ 
    return '';
    }
    if(arr.length == 1) {
        return arr[0];
    }      
    let longestStr = arr[0];
    let length = longestStr.length;

    while(length > 0) {
        for(let i = 1; i < arr.length; i++){
            if (arr[i].substr(0, length) != longestStr) {
                break;
            } else {
                if(i == arr.length - 1) {
                    return longestStr.substr(0, length);
                }
            }
        }       
        length--;
        longestStr = longestStr.substr(0, length);
    }
    return '';
}

let arr = ["flower","flow","flight"];
let result = longestCommonPrefix(arr);
if(result == ""){
console.log(`There is no least common prefix`);
}
else{
console.log(`The least common prefix words: ${result}`);
}