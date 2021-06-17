let activitySelection = (arr, n) => {
	let selected = [];
	arr = arr.sort((a, b) => {
		return a[1] - b[1];
	});
	let i = 0;
	selected.push(arr[i]);
	for (let j = 1; j < n; j++) {
		if (arr[j][0] >= arr[i][1]) {
			selected.push(arr[j]);
			i = j;
		}
	}
	return selected;
};

Activity = [
	[5, 9],
	[1, 2],
	[3, 4],
	[0, 6],
	[5, 7],
	[8, 9],
];
console.log(`The given Activities are :`);
console.log(Activity);
n = Activity.length;
let result = activitySelection(Activity, n);
console.log(`The following activites are selected : `);
console.log(result);
