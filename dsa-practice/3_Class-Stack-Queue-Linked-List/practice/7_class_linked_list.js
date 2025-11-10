class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //* O(1)
  append(value) {
    const newNode = new Node(value); //* Making a node like { value: 10, next: null }

    // If the linked list is empty
    if (this.head === null) {
      //   this.head = { value: 10, next: null };
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the linked list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; //! In OOP if we return the this keyword, it will return the whole object, which will enable us to do chaining like linkedList.append(0).append(1).append(2)
  }
  //* O(1)
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      // empty list: head and tail both reference the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // non-empty list: newNode -> old head, newNode becomes head
      //* Only the list has head and tail. Individual nodes do not have tail (so newNode.tail is invalid). newNode.tail doesn't exist because newNode is a Node. You can only set newNode.next — that's the pointer from this node to the next node. tail is a property of the list, not of each node.
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //* Best Case (first or last insert) - O(1), Worst case (middle or end removal) - O(n)
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.log(`Index out of bound: Length - ${this.length}`);
      return undefined;
    }
    // if the insert is at the start of the linked list
    if (index === 0) {
      return this.prepend(value);
    }
    // if the insert is at the end of the linked list
    if (index === this.length) {
      return this.append(value);
    }
    // if the insert is in the middle
    //* 1. Find the leading node
    const leadingNode = this._traverseToIndex(index - 1);
    //* 2. Find holding node (which is currently referenced as next to the leading node)
    const holdingNode = leadingNode.next;
    //* 3. Make new node
    const newNode = new Node(value);
    //* 4. Make the connections
    leadingNode.next = newNode;
    newNode.next = holdingNode;
    //* 5. Increase Length
    this.length++;
  }
  //* Best Case (only for first node removal) - O(1), Worst case - O(n)
  remove(index) {
    //* If we want to remove the first element
    if (index === 0) {
      const removedItem = this.head.value;
      this.head = this.head.next;
      // If there is only one node and we want to remove it (head will already be null, we only need to set tail to null)
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return removedItem;
    }
    const leadingNode = this._traverseToIndex(index - 1);
    const nodeToRemove = leadingNode.next;
    leadingNode.next = nodeToRemove.next;
    //* If we remove the last element (then the next of leading node will be null)
    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
    this.length--;
    return nodeToRemove.value;
  }

  //! Private Helper Method - _ in front because of setting it as private constraint, so only used inside the object and not publicly. JS is multi-paradigm unlike languages like Java, which has fixed public and private constraints. JS developers use it as a convention so that these private methods are not used publicly!!
  _traverseToIndex(index) {
    //* 1. Find the leading node
    let count = 0;
    let currentNode = this.head;
    //* O(n)
    while (count != index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  print() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(' -> '), '-> null');
  }
}

const linkedList = new LinkedList();

// linkedList.append(0).append(1).append(3);

// linkedList.prepend(10);
// linkedList.prepend(20);
// linkedList.prepend(30);

// linkedList.insert(2, 200);

linkedList.append('A'); //* 0
linkedList.append('B'); //* 1
// linkedList.append('C'); //* 2
linkedList.append('D'); //* 3 --> 2

linkedList.print();

linkedList.remove(2);
linkedList.remove(0);
linkedList.print();
linkedList.remove(0);

linkedList.print();
