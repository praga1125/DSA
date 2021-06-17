class LRUCache {
	constructor(capacity) {
		this.map = new Map();
		this.capacity = capacity;
	}

	get(key) {
		if (!this.map.has(key)) return -1;
		const value = this.map.get(key);
		this.map.delete(key);
		this.map.set(key, value);
		return value;
	}

	put(key, value) {
		this.map.delete(key);
		this.map.set(key, value);
		if (this.map.size > this.capacity) {
			const firstItem = this.map.keys().next().value;
			this.map.delete(firstItem);
		}
    return null;
	}
}

let result = [];
let arr = [
	[3, 3],
	[3],
	[1, 1],
	[2, 2],
	[1],
	[5, 5],
	[0, 0],
	[4, 4],
	[0],
	[5],
	[4],
];
console.log(`The given cache values are :`);
console.log(arr);
let limit = 2;
let obj = new LRUCache(limit);
for (let i = 0; i < arr.length; i++) {
	if (arr[i].length == 2) {
		result.push(obj.put(arr[i][0], arr[i][1]));
	} else {
		result.push(obj.get(arr[i][0]));
	}
}
console.log(`The Least Recently used cache :`);
console.log(result);
