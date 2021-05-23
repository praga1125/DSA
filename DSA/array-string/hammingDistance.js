const hammingDistance = (x, y) => {
  let xorResult = x ^ y;
  let binaryFormat = xorResult.toString(2);
  let hammingDistance = 0;
  for(let digits of binaryFormat.split('')){
    if(digits == 1) {
      hammingDistance++;
    }
  }
  return hammingDistance;
}

let x = 2, y = 4;
console.log(`The x and y distance values are : ${x}, ${y}`);
let result = hammingDistance(x, y);
console.log(`The hamming distance between the given distance : ${result}`);