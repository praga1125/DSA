// program that build the binary tree using inOrder and preOrder
const buildTree = (preOrder, inOrder) => {
  return helper(0, 0, inOrder.length -1, preOrder, inOrder);
}

const helper = (preStart, InStart, inEnd, preOrder, inOrder) => {
  if (preStart > preOrder.length - 1 || inStart > inEnd) {
    return null;
  }
  let root = new Node(preOrder[preStart]);
  let inIndex = 0;
  for (let i = inStart; i <= inEnd; i ++) {
      if (root.data == inOrder[i]) inIndex = i;
  }
  root.left = helper(preStart + 1, inStart, inIndex - 1, preOrder, inOrder);
  root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preOrder, inOrder);
  
  return root;
}