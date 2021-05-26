
const flatten = (root) => {
function flat(node) {
    if (node == null) return null;
    let leftTail = flat(node.left);
    let rightTail = flat(node.right);
    
    if (node.left == null && node.right == null) {
        return node;
    } else if (node.left == null) {
        return rightTail;
    } else if (node.right == null) {
        let leftHead = node.left;
        node.right = leftHead;
        node.left = null;
        return leftTail;
    } else {
        let leftHead = node.left;
        let rightHead = node.right;
        leftTail.right = rightHead;
        node.right = leftHead;
        node.left = null;
        return rightTail;
    }
}
  if (root == null) return;
    flat(root);
};