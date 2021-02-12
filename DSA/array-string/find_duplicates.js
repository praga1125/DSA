find_duplicates = values => {
let counter = {};
let result = [];
    for(let i=0;i<arr.length;i++){
        if(counter[arr[i]]){
            counter[arr[i]] += 1;
            if(counter[arr[i]]<= 2){
                result.push(arr[i]);
            }
        }
        else{
            counter[arr[i]] = 1;
        }
    }
    return result;
}
let arr =  [9, 1, 2, 3, 1, 2, 4, 3];
console.log(find_duplicates(arr));
