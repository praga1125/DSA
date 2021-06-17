function isPalindrome(str) {
	let start = 0;
	let end = str.length - 1;
	while (start < end) {
		let s = str.charCodeAt(start);
		let e = str.charCodeAt(end);

		if (!isLetter(s)) {
			start++;
			continue;
		}
		if (!isLetter(e)) {
			end--;
			continue;
		}

		if (toLowerCase(s) !== toLowerCase(e)) {
			return console.log(`It is not a palindrome`);
		}
		start++;
		end--;
	}
	return console.log(`It is a valid palindrome`);
}

function isLetter(character) {
	if (
		(character >= 48 && character <= 57) ||
		(character >= 65 && character <= 90) ||
		(character >= 97 && character <= 122)
	) {
		return true;
	} else {
		return false;
	}
}

function toLowerCase(character) {
	if (character >= 65 && character <= 90) {
		return character + 32;
	} else {
		return character;
	}
}

let str = "A man, a plan, a canal: Panama";
console.log(`The given string is : ${str}`);
isPalindrome(str);
