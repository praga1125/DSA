class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binaryTree {
  constructor() {
    this.root = null;
  }
  sortedArrayToBST(nums, start = 0, end = nums.length -1) {
    if (start <= end){
      let mid = Math.floor((start+end) / 2);
      let root = new Node(nums[mid]);
      root.left = this.sortedArrayToBST(nums, start, mid - 1);
      root.right = this.sortedArrayToBST(nums, mid + 1, end);
      return root;
    }
    return null;
  }
}

let obj = new binaryTree();
let arr = [-10, -3, 0, 5, 9];
console.log(`The given binary tree is : ${arr}`);
let root = obj.sortedArrayToBST(arr);
console.log(root);