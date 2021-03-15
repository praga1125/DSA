let minWindow = (arr, target) => {
let array = new Array(128).fill(0);
let result = [-Infinity, Infinity];
let missing = target.length;
for(let i=0;i<target.length;i++){
    array[target.charCodeAt(i)]++;
}
let start = 0;
for(let end=0;end<arr.length;end++){
    if(array[arr.charCodeAt(end)] > 0){
    missing--;
    }
    array[arr.charCodeAt(end)]--;
    while(missing == 0){
        if(result[1] - result[0] > end - start){
            result[1] = end;
            result[0] = start;
        }
        array[arr.charCodeAt(start)]++;
        if(array[arr.charCodeAt(start)] > 0){
            missing++;
        }
        start++;
    }
}
return result[1] == Infinity ? "" : arr.slice(result[0], result[1]+1)
}

const  arr = "helloWorld";
const target = "eoo";
console.log(`The given String is : ${arr}`);
console.log(`The target string : ${target}`);
const result = minWindow(arr, target);
console.log(`The minimum window subString of the given string : ${result}`);