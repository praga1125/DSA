function groupAnagrams(str) {
	let map = new Map();
	let n = str.length;
	let result = [];
	for (let i = 0; i < n; i++) {
		let word = str[i];
		let sortedWord = word.split("").sort().join("");
		if (!map.has(sortedWord)) {
			map.set(sortedWord, [word]);
		} else {
			let words = map.get(sortedWord);
			words.push(word);
			map.set(sortedWord, words);
		}
	}
	for (let [k, v] of map) {
		result.push(v);
	}
	return result;
}

let words = ["cat", "bat", "tab", "loop", "pool", "ate", "eat", "tea"];
console.log(`The given array of words are :`);
console.log(words);
let result = groupAnagrams(words);
console.log(`The group of anagrams are :`);
console.log(result);
