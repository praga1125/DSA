// BFS Iterative Solution
var maxDepth = function(root) {
    if (!root) return 0;
    let maxDepth = 0, queue = [{node: root, level:1}];
    while(queue.length) {
        let {node, level} = queue.shift();
        maxDepth = Math.max(maxDepth, level);
        if (node.left) queue.push({node: node.left, level: level+1});
        if (node.right) queue.push({node: node.right, level: level+1});
    }
    return maxDepth;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
let arr = [5,4,3,2,1,0];
let result =0;
for(let i=0;i<arr.length;i++)
   result = maxDepth(arr[i]);

console.log(result);