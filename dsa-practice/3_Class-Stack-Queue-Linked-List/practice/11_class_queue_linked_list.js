//* Queue implementation using Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
  }
  //* O(1)
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }
  //* O(1)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const nodeToRemove = this.head;
    this.head = this.head.next;

    if (this.head === this.tail) {
      this.tail = null;
    }
    this.size--;
    return nodeToRemove.value && this;
  }
  //* O(1)
  peek() {
    return this.head ? this.head.value : undefined;
  }
  //* O(1)
  isEmpty() {
    return this.head === null || this.size === 0;
  }
  //* O(n)
  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('Front -> ' + arr.join(' -> ') + ' -> Back');
  }
}

const queue = new Queue();

queue.enqueue('Em').enqueue('Cin').enqueue('Bonn').enqueue('Poki');

queue.print();
queue.dequeue().dequeue().dequeue().dequeue();

queue.print();
console.log(queue.peek());
