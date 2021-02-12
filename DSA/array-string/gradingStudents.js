function grading(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] >= 36){
        if(arr[i] % 5 == 3){
           arr[i] += 2;
        }
        else if(arr[i] % 5 == 4){
            arr[i] += 1;
        } 
      }
    }
    return arr;
}
let arr = [44, 12, 55, 99, 33];
const result = grading(arr);
console.log(result);