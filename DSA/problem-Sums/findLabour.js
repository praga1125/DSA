let startTime = [1230, 1200, 1600];
let endTime = [0130, 0100, 1700];
let len = startTime.length;
function findLabour(startTime, endTime, len) {
	startTime.sort((a, b) => {
		return a - b;
	});
	endTime.sort((a, b) => {
		return a - b;
	});
	let i = 0;
	(j = 0), (count = 1);
	while (i < len) {
		if (startTime[i] < endTime[j]) {
			count++;
		} else {
			j++;
		}
		i++;
	}
	return count;
}

console.log(`The starting time of the work : [${startTime}]`);
console.log(`The ending time of the work : [${endTime}]`);
let result = findLabour(startTime, endTime, len);
console.log(`The minimum no of labours are needed : ${result}  `);
