function jobScheduling(arr, noOfJobs){ 
  let n = arr.length;
  for(let i = 0; i < n; i++){
    for(let j = 0 ; j < (n - 1 - i); j++){
      if(arr[j][2] <  arr[j+1][2]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  let result = [];
  let job = [];
  for(let i = 0; i < noOfJobs; i++){
    job[i] = '-1';
    result[i] = false;
  }
  for(let i = 0; i < arr.length; i++){
    for(let j = (noOfJobs - 1, arr[i][1] - 1); j >= 0; j--){
      if(result[j] == false){
        result[j] = true;
        job[j] = arr[i][0];
        break; 
      }
    }
  }
  return job;
}

let arr = [['a', 2, 100], ['b', 1, 19], ['c', 2, 27], ['d', 1, 25], ['e', 3, 15]];
console.log(`The given jobId , deadLine and profits are :`);
console.log(arr);
let result = jobScheduling(arr, 3);
console.log(`The profit sequence jobs are :`);
console.log(result);