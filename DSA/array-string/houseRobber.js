const houseRobber = (house) => {
  let amountRobbed = [...Array(house.length)].fill(null);
  for(let idx = 0; idx < house.length; idx++){
    if(idx == 0) {
      amountRobbed[idx] = house[0];
    } else if(idx === 1) {
      amountRobbed[idx] = Math.max(house[0], house[1]);
    } else {
      amountRobbed[idx] = Math.max( house[idx] + amountRobbed[idx - 2], amountRobbed[idx - 1]);
    }
  }
  return amountRobbed[amountRobbed.length - 1];
}

let house = [1, 2, 2, 4, 4];
console.log(`The given array of houses ar : ${house}`);
let result = houseRobber(house);
console.log(`The maximum amount of money are : ${result} houses robbed tonight`);
