function romanToInt(str){
    if(str.length == 0){
        return 0;
    }
    let obj = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let result = 0;
    for(let i=0; i<str.length; i++){
        if(obj[str[i]] < obj[str[i+1]]){
            result = result + (obj[str[i+1]] - obj[str[i]]);
        }
        else {
            result += obj[str[i]];
        }
    }
    return result;
}

let str = 'XII';
console.log(`The given roman letter is : ${str}`);
let result = romanToInt(str);
console.log(`The roman letter to the Integer is : ${result}`);