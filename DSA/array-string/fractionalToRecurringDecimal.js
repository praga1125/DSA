const fractionalToDecimal = (numerator, denominator) => {
  if(numerator ==  0)
    return 0;
  let result = '';
  result += (numerator > 0) ^ (denominator > 0) ? '-' : '';
  let temp1 = Math.abs(numerator);
  let temp2 = Math.abs(denominator);
  result += Math.floor(temp1 / temp2);
  temp1 %= temp2;
  if(temp1 === 0){
    return result;
  } 
  result += '.';
  let map = {};
  while(temp1 !== 0) {
    map[temp1] = result.length; 
    temp1 *= 10;
    result += Math.floor(temp1 / temp2);
    temp1 %= temp2;
    let repeatingFraction = map[temp1];
    if(repeatingFraction !== undefined) {
      result = result.substring(0, repeatingFraction) + '(' + result .substring(repeatingFraction) + ')';
      break;
    }
  }
  return result;
}

const numerator = 2, denominator = 3;
console.log(`The fractional value  of numerator and denominator : ${numerator} , ${denominator}`);
let result = fractionalToDecimal(numerator, denominator);
console.log(`The decimal value of the given fractional numbers is : ${result}`);

