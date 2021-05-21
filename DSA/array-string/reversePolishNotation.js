const evaluation = (arr) => {
  let a, b, index = 0;
  while(arr.length > 1) {
    b = parseInt(arr[index - 1]);
    a = parseInt(arr[index - 2]);
    switch(arr[index]) {
      case "+":
        arr.splice(index - 2, 3, (a + b).toString());
        index -= 2;
        break;
      case "-":
        arr.splice(index -2, 3, (a - b).toString());
        index -= 2;
        break;
      case "*":
        arr.splice(index - 2, 3, (a * b).toString());
        index -= 2;
        break;
      case "/":
        arr.splice(index - 2, 3, (a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b).toString()));
        index -= 2;
        break;
      default:
        index++;
        break;
    }
  }
  return arr[0];
}

const arr = ["2", "1", "+", "3", "*"];
console.log(`The given reverse Polish notation is : ${arr}`);
const result = evaluation(arr);
console.log(`The value of the arithmetic expression is : ${result}`);
