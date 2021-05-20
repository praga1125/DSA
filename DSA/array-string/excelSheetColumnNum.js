const columnNum = (str) => {
  let columnNum = 0;
  for(let i = str.length - 1, powerOf26 = 1; i >= 0; i--, powerOf26 *= 26) {
    columnNum += powerOf26 * (str.charCodeAt(i) - 64);
  }
  return columnNum;
}

const str = 'AA';
console.log(`The given string is : ${str}`);
const result = columnNum(str);
console.log(`The given string of excel sheet column number is : ${result}`);