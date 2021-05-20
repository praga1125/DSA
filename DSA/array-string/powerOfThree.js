const powerOf3 = (num) => {
  return 0 < num && (3 ** 33) % num == 0;
};

const num = 9;
console.log(`The given number is : ${num}`);
const result = powerOf3(num);
if(result) {
  console.log('The given number is power of three');
} else {
  console.log('The given number is not power of three');
}