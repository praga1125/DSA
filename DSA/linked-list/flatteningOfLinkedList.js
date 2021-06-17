const flatten = (head) => {
	if(!head) return null;
	let dummyNode = new Node(0, null, null, null);
	let currentNode = dummyNode;
	recurse(currentNode, head);
	dummyNode.next.prev = null;
	return dummyNode.next;
};

const recurse = (prev, curr) => {
	if(!curr) return prev;
	curr.prev = prev;
	prev.next = curr;
	let tempNode = curr.next;
	let mergeNode = recurse(curr, curr.child);
	curr.child = null;
	return recurse(mergeNode, tempNode);
}
