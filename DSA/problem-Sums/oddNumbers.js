let start = 2,
	end = 16;
let arr = [];
for (let i = start; i <= end; i++) {
	if (i % 2 != 0) {
		arr.push(i);
	}
}

console.log(`The given start and end numbers : ${start} and ${end}`);
console.log(`odd numbers between the given sequence : `);
console.log(arr);
