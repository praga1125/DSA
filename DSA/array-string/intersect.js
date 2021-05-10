let intersect = (arr1, arr2) => {
    const map = new Map();
    for(const i of arr1){
        if(map.has(i)){
            map.set(i, map.get(i)+1);
        }
        else{
            map.set(i, 1);
        }
    }
    let commonValues = [];
    for(const j of arr2){
        if(map.has(j) && map.get(j) > 0){
            if(commonValues.includes(j)){
              map.set(j, map.get(j)-1);
            }
            else{
                commonValues.push(j);
                map.set(j, map.get(j)-1);   
            }
         }
    }
    return commonValues;
}

console.log(`The given array values :`);
let arr1 = [11, 22, 22, 33];
let arr2 = [11, 22, 33, 44, 22, 11, 33];
console.log(arr1);
console.log(arr2);
let result = intersect(arr1, arr2);
console.log(`The common intersection values are : ${result}`);