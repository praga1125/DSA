function permutation(arr) {
	let result = [];
	helper(arr, 0, result);
	return result;
}
 const helper = (arr, index, result) => {
    if(index == arr.length) {
        result.push([...arr]);
    }
    for(let i = index; i < arr.length; i++) {
        swap(arr, index, i);
        helper(arr, index + 1, result);
        swap(arr, index, i);
    }
 }
 function swap(arr, v1, v2) {
     [arr[v1], arr[v2]] = [arr[v2], arr[v1]];
 }
 
let arr = ["a", "b", "c"];
let result = permutation(arr);
console.log(`The permutation of values : ${arr}`);
console.log(result);
