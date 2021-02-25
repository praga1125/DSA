let selectionSort = (arr) => {
	for(let i=0;i<arr.length;i++){
		let min = i;
		for(let j=i+1;j<arr.length;j++){
			if(arr[min] > arr[j]){
				min = j;
			}
		}
		if(min != i){
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
	return arr;
}
let arr = [5, 6, 1, 8, 3, 4, 9, 2, 9];
console.log(`The given array is : ${arr}`);
let result = selectionSort(arr);
console.log(`The sorted array is  : ${result}`);