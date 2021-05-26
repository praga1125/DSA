const copyRandomList = (head) => {
  if (head == null) {
      return null;
  }
  let temp = head;
  while (temp !== null) {
      let newNode = new Node(temp.val);
      newNode.next = temp.next;
      temp.next = newNode;
      temp = newNode.next;
  }
  temp = head;
  while (temp !== null) {
      temp.next.random = temp.random ? temp.random.next : null;
      temp = temp.next.next;
  }
  let oldList = head;
  let newList = head.next;
  let dummy = newList;
  while (oldList !== null) {
      oldList.next = oldList.next.next;
      newList.next = newList.next ? newList.next.next : null;
      oldList = oldList.next;
      newList = newList.next;
  }
  return dummy;
}   