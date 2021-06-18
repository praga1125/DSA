/*
INPUT: [[1,3], [2, 4], [2, 6], [8, 9], [8, 10], [9, 11], [15, 18], [16, 17]]
OUTPUT: [[1,6], [8,11], [15,18]]
*/
const mergeIntervals = (intervals) => {
	if (!intervals.length) return intervals;
	intervals.sort((a, b) => (a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]));
	let prev = intervals[0];
  // console.log(prev);
	const result = [prev];
	for (const curr of intervals) {
		if (curr[0] <= prev[1]) {
			prev[1] = Math.max(curr[1], prev[1]);
		} else {
			result.push(curr);
			prev = curr;
		}
	}
	return result;
};

const intervals = [
	[1, 3],
	[2, 4],
	[2, 6],
	[8, 9],
	[8, 10],
	[9, 11],
	[15, 18],
	[16, 17],
];
console.log(`The given intervals are :`);
console.log(intervals);
const mergedIntervals = mergeIntervals(intervals);
console.log(`The merged intervals are :`);
console.log(mergedIntervals);
