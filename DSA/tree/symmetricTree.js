// check the binary tree is mirror of itself or not
const isSymmetric = (root) => {
  if(root === null) {
    return true;
  }
  return recursiveSymmetric(root.left, root.right);
}

const recursiveSymmetric = (left, right) => {
  if(left == null || right == null) {
    return left == right;
  }
  if(left.data != right.data) {
    return false;
  }
  return recursiveSymmetric(left.left, right.right) && recursiveSymmetric(left.left, right.right);
}
