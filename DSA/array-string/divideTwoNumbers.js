const divideTwoNumbers = (dividend, divisor) => {
  if(dividend === -2147483648 && divisor === -1) 
    return 2147483648;
  let result = 0, sign = 1;
  if(dividend < 0){
    dividend = -dividend;
    sign = -sign;
  }
  if(divisor < 0) {
    divisor = -divisor;
    sign = -sign;
  }
  if(dividend === divisor) {
    return sign;
  }
  for(let i = 0, value = divisor; dividend >= divisor; i = 0, value = divisor) {
    while( value > 0 && value <= dividend) {
      value = divisor << ++i;
      dividend -= divisor << i-1;
      result += 1 << i-1;
    } 
  }
  return sign < 0 ? -result : result;
}

const dividend = 7, divisor =  -3;
console.log(`The dividend is : ${dividend}, divisor is : ${divisor}`);
const result = divideTwoNumbers(dividend, divisor);
console.log(`The division of the two numbers is : ${result}`);
console.log('(without using multiplication, division, modulus operators)');