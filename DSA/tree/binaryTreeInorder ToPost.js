// build a binary tree using inOrder to postOrder
const buildTree = function(inOrder, postOrder) {
  function buildBT(postStart,postEnd,inStart, inEnd, inOrder, postOrder){
      if( postStart > postEnd || inStart > inEnd) {
          return null;
      }
      let node = new TreeNode(postOrder[postEnd])
      if (inStart == inEnd || postStart == postEnd) {
            return node;}
          
      let position = 0, i = 0
      while(i <= inEnd){
          if(inOrder[i] == node.val){
              position = i;
              break;
          }
          i++;
      }

      node.left = buildBT(postStart,postStart + position  - inStart-1 ,inStart, position-1, inOrder, postOrder);
      node.right = buildBT( postEnd - inEnd + position,postEnd-1, position+1,inEnd, inOrder, postOrder);
      return node;
  }
  return buildBT(0,postOrder.length-1,0, inOrder.length-1, inOrder, postOrder);
};
