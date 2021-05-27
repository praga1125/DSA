const serialize = function(root) {
  const stack = [root], result = [];
  while (stack.length) {
      const curr = stack.pop();
      if (curr) {
          result.push(curr.val);
          stack.push(curr.right);
          stack.push(curr.left);
      } else {
          result.push(null);
      }
  }
  return result.join(',')
};

// deserialize algorithm:
const deserialize = function(data) {
  data = data.split(',');
  let idx = -1;
  const dfs = () => {
      if (isNaN(data[++idx])) {
          return null;
      }
      const root = new TreeNode(data[idx]);
      root.left = dfs();
      root.right = dfs();
      return root;
  }
  return dfs();
};