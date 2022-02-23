const n = 5;
const arr = [10, -1, 3, 1, 0];
function threeSum(n, arr) {
	arr.sort((a, b) => a - b);
  let triplet = [];
	for (let i = 0; i < n; i++) {
		if (i > 0 && arr[i] == arr[i - 1]) continue;
		findPair(arr, -arr[i], i+1, triplet);
  }
  return triplet;
}

function findPair(arr, target, left, triplet) {
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum == target){
      triplet.push([-target, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) left += 1;
			while (left < right && arr[right] === arr[right + 1]) right -= 1;
		} else if (sum < target) {
			left += 1;
		} else {
			right -= 1;
		}
    }
  }

let result = threeSum(n, arr);
if(result === []){
  console.log("this is not a triplet");
} else {
  console.log("this is a triplet :");
  console.log(result);
}