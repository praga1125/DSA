let search = (arr, target) => {
    let checker = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == target){
            return i;
        }
    }
}
const arr = [5, 6, 7, 9, 2, 1, 3];
const target = 5;
let result = -1;
result = search(arr, target);
if(result == -1){
    console.log(`Search is not found `);
}
else{
    console.log(`search is found at index of ${result}`);
}