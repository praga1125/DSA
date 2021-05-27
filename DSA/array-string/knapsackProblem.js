const ItemValue = function(weight, value) {
  this.weight = weight; 
  this.value = value; 
  this.ratio = value / weight;
}

const getMaxValue = (weight, value, capacity) => {
  let temp = new Array(weight.length);
  
  for (let i = 0; i < weight.length; i++) { 
    temp[i] = new ItemValue(weight[i], value[i]); 
  } 
  
   temp = temp.sort((a, b) => b.ratio - a.ratio);
    
   let totalValue = 0;
   
   for (let i of temp) { 
     let curWt = i.weight; 
     let curVal = i.value; 

     if (capacity - curWt >= 0) { 
       capacity = capacity - curWt; 
       totalValue += curVal; 
     } 
     else { 
       let fraction = (capacity / curWt); 
       totalValue += (curVal * fraction); 
       capacity = (capacity - (curWt * fraction)); 
       break; 
     } 
   } 

  return totalValue;
}

const profit = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const capacity = 15;
console.log(`The given weight is : ${weights}`);
console.log(`The given profits is ${profit}`);
console.log(`The given capacity of knapsack : ${capacity}`);
const result = getMaxValue(weights, profit, capacity);
console.log(`The maximum profit by taking the whole items of weight is : ${result}`);
