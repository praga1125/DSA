function increasingTriplet(arr){
    let firstNumber = Infinity;
    let secondNumber = Infinity;
    for (let currentNumber of arr) {
      if (currentNumber > secondNumber && currentNumber > firstNumber) {
        return true;
      }
      if (currentNumber > firstNumber) {
        secondNumber = currentNumber;
      } 
      else {
        firstNumber = currentNumber;
      }
    }
    return false;
  }

  let arr = [1, 2, 10, 5, 2];
  console.log(`The given array is :`);
  console.log(arr);
  let result = increasingTriplet(arr);
  if(result){
      console.log(`It is increasing triplet Subsequence`);
  }
  else{
      console.log(`It is not a increasing triplet Subsequence`);
  }