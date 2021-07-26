let num = [13, 2, 4, 15, 12, 10, 5];
console.log(`The given number is : [${num}]`);
for (let i = 0; i < num.length; i += 2) {
	if (num[i] < num[i + 2]) {
		[num[i], num[i + 2]] = [num[i + 2], num[i]];
	}
}

// sort the elements in odd positions descending order and else in ascending order

for (let j = num.length - 2; j > 0; j -= 2) {
	if (num[j] < num[j - 2]) {
		[num[j], num[j - 2]] = [num[j - 2], num[j]];
	}
}

console.log(`The sorted given elements :`);
console.log(num);
