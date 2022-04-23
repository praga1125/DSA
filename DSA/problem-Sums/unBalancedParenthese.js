let str = "((abc)((de))";
let temp = [], count = 0;
let len = str.length;
let result = '';
for(let i = 1; i < len-1; i++) {
	if(str[i] == '(') {
		temp[count] = i;
		count++;
	}
	if(str[i] == ')') {
		if(count != 0) {
			count--;
		} else {
			temp[count] = i;
			count++;
		}
	}
}

for(let i = 0; i < len; i++) {
	let flag = 0;
	for(let j = 0; j < count; j++) {
		if(i == temp[j]) 
			flag = 1;
	}
		if(flag == 0) {
			result += str[i];
			}
}

console.log(`The given string is : ${str}`);
console.log(`The balanced parentheses of string : ${result}`);
