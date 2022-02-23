const arr = [1, 2, 3, 4, 5, 6, 7];
const target = 5;
function search(arr, target, left, right) {
  if (left > right) {
		return -1;
	}
  let mid = (left+right)/2;
  if(arr[mid] == target) {
    return mid;
  }
  if(arr[mid] > target) {
    return search(arr, target, left, mid-1);
  } else {
    return search(arr, target, mid+1, right);
  }
}

const result = search(arr, target, 0, arr.length-1)
console.log(`the index of the searched value of index is : ${result}`);