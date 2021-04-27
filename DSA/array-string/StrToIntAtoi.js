function StrToInt(str){
  let sign = 1;
  let result = 0;
  let i = 0;
  str = str.trim();
  if(!str){
    return 0;
  }
  if(str[i] == '+'){
    sign = 1;
    i++;
  }
  else if(str[i] == '-'){
    sign = -1;
    i++;
  }
  for(;i<str.length;i++){
    let temp = str.charCodeAt(i) - 48;
    if(temp > 9 || temp < 0) break;
    if(result > 2147483647/10 || result > (2147483647-temp)/10){
      return sign == 1 ? 2147483647 : -2147483648;
    }
    else{
      result = result * 10 + temp;
    }
  }
  return result * sign;
}

let str = "-5432sub";
console.log(`The given string is : `);
console.log(str);
let result = StrToInt(str);
console.log(`The integer value is : `);
console.log(result);