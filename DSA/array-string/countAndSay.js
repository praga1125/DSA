function countAndSay(num) {
  if(num == 1)
    return '1';
  num = countAndSay(num - 1).split('');
  let result = '' ;
  let count = 1;
  num.forEach((element, index) => {
    if (element === num[index + 1]){
      count++;
    }
    else {
      result += count + element;
      count = 1;
    }
  });
  return result;
}

let num = 4;
console.log(`The given positive integer is : ${num}`);
let result = countAndSay(num);
console.log(`The nth term of count and say sequence : ${result}`);