let arr1 = [1, 3, 4, 5, 6, 8, 9];
let arr2 = [1, 5, 8, 9, 2];

function intersect(arr1, arr2) {
	let k = 0;
	let arr = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[k]) {
			arr.push(arr1[i]);
			k++;
		}
	}
	return arr;
}

function merge(arr1, arr2) {
	let obj = {};
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] in obj) {
			obj[arr1[i]] += 1;
		} else {
			obj[arr1[i]] = 1;
		}
	}
	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] in obj) {
			obj[arr2[i]] += 1;
		} else {
			obj[arr2[i]] = 1;
		}
	}
	return Object.keys(obj).map(Number);
}

function exception(arr1, arr2) {
	let temp = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] % 2 === 0) arr1[i] = 0;
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== 0) temp.push(arr1[i]);
	}
	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] % 2 !== 0) arr2[i] = 0;
	}
	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] !== 0) temp.push(arr2[i]);
	}
	return temp;
}

let intersection = intersect(arr1, arr2);
let union = merge(arr1, arr2);
let except = exception(arr1, arr2);
console.log(`The union of the array :`);
console.log(union);
console.log(`The intersection of the array :`);
console.log(intersection);
console.log(`The exception of the array :`);
console.log(except);
