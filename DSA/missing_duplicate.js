const missingAndDuplicate = (n, arr) => {
    let result = {}
    for(let i=0;i<n-1;i++){
        if(arr[i]+1 != arr[i+1]){
            if(arr[i+1] > arr[i]){
                result['missing'] = arr[i]+1;
            }
            else{
                result['duplicate'] = arr[i];
            }
        }
    }
    if(!result['missing']){
        result['missing'] = arr[n-1]+1;
    }
    return result;
}

const n = 5, arr = [1, 2, 3, 5, 5];
const result = missingAndDuplicate(n, arr);
console.log(result);