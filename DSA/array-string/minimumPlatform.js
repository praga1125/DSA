function findPlatform(arr, dep, n){
  arr = arr.sort();
  dep = dep.sort();
  let plat_need = 1, result = 1, i = 1, j = 0;
  while(i < n && j < n){
    if(arr[i] <= dep[j]){
      plat_need++;
      i++;
    }
    else if(arr[i] > dep[j]){
      plat_need--;
      j++;
    }
    if(plat_need > result){
      result = plat_need;
    }
  } 
  return result;
}

let arrival = [900, 940, 950, 1100, 1500, 1800];
console.log(`The given arrival of the trains : ${arrival}`);
let departure = [910, 1200, 1120, 1130, 1900, 2000]; 
console.log(`The given departure of the trains : ${departure}`);
let n = arrival.length;
let result = findPlatform(arrival, departure, n);
console.log(`The minimum required platform for the given trains : ${result} `);