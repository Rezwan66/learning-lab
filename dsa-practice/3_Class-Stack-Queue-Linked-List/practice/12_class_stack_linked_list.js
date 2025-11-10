//! Stack implementation using Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.bottom = null; //head
    this.top = null; //tail
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      this.top.next = newNode;
      this.top = newNode;
    }
    this.size++;
    return this;
  }
  pop() {
    // const nodeToRemove = this.top;
    if (this.isEmpty()) {
      return undefined;
    }
    // const leadingNode = this._traverseToIndex(this.size - 1);
    const nodeToRemove = this.top;
    this.top = this.top.next; //!
    this.size--;
    return nodeToRemove.value;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.top ? this.top.value : undefined;
  }
  isEmpty() {
    return this.bottom === null || this.size === 0;
  }
  //* O(n)
  print() {
    const arr = [];
    let currentNode = this.bottom;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('Bottom -> ' + arr.join(' -> ') + ' -> Top');
  }
}

const stack = new Stack();

stack.push(1).push(2).push(3);

stack.print();

console.log(stack.peek());
stack.print();
