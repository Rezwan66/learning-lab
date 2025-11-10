# Module 3: Data Structures that actually matter

Created: November 4, 2025 9:24 PM

### Stateless vs Stateful

**Q. Why we are implementing these data structures in objects rather than functions?**

**Ans:** In the perspective of JS, functions are **stateless** (cannot hold data), whereas objects are **stateful** (can hold data).

** A **lexical environment** is the local scope environment within the function. Data does not persist outside that lexical environment.

A function lexical environment has access to only two things:

1. The inner variables and functions within the lexical environment
2. It creates a reference to the outer world.

The lexical environment is destroyed every time the function returns sth; hence, the next time it runs, it creates everything anew.

```jsx
//* Stateless vs Stateful - Function

 const counter = amount => {
   let count = 0;
   count += amount;
   return count;
 };
 console.log(counter(3));
 console.log(counter(2));
```

Objects, on the other hand, are stateful, and can hold data:

```jsx
//* Stateless vs Stateful - Object

const counter = {
  count: 0,
  add(amount) {
    this.count = this.count + amount; //* In JS, functions inside objects are known as methods
  },
  print() {
    console.log(this.count);
  },
};

counter.add(2);
counter.add(3);
counter.print();
```

**The stateless behaviour of the function can be resolved by moving the initiation of the count variable outside the function.

Two programming paradigms:

1. OOP (Object Oriented Programming)
2. Functional Programming- Every function must be a pure function. A pure function is a function which will provide the same output every time for the same input. Hence, by moving the count variable outside the function’s lexical environment, we are destroying the functional programming paradigm.

This issue can be resolved in JS, using the power of closure and scope of functions:

But we will not go in this direction, since most other programming languages do not offer these functionalities.

And DSAs should be actualised regardless of programming language.

Hence, we will go in the object direction.

Rather, we will see the use of class constructors to create these stateful objects

```jsx
// Higher order function method:
const createCounter = () => {
  let count = 0;

  return amount => {
    count += amount;
    return count;
  };
};

const counter = createCounter();
console.log(counter(3));
console.log(counter(5));
```

### Class Constructor

Class acts as a reusable blueprint that will enable us to reproduce similar kinds of objects again and again.

```jsx
class Counter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count = this.count + amount; //* In JS, functions inside objects are known as methods
  }

  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0);
counter1.add(2);
counter1.add(3);
counter1.print();

const counter2 = new Counter(10);
counter2.add(20);
counter2.add(30);
counter2.print();

```

*****this** - keyword means we are dealing with the variable only inside the object, the variable which doesnt have a this in front will come from the outer world…eg.* 

```jsx
this.count = count //< this count will come from outside the function (object er bairer theke ashbe ei variable)
//^-this count denotes the count we are considering inside the object (object we bhitorer variable)
```

> Hence, this class constructor acts as a reusable object which will be stateful for each instance we create.
> 

### Stack

Stack places its elements in a structure which stay one above the other. The distinguishing feature of a stack is that it works in the **L.I.F.O.** method (Last In First Out). Stack operations:

- push()
- pop()
- peek() - to peek the last entered element

These methods can be implemented using JS arrays or linked lists. 

In JS, implementing a stack using an array is more efficient.

![image.png](image.png)

![image.png](image%201.png)

```jsx
class Stack {
  constructor() {
    this.items = [];
  }

  //* O(1)
  push(value) {
    this.items.push(value);
  }

  //* O(1)
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  //* O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  //* O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  //* O(n)
  print() {
    console.log(this.items.slice().reverse().join('->'));
  }
}

const stack = new Stack();

// console.log(stack.peek());
// console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
// stack.print();
// console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
```

### Queue

A queue is a **F.I.F.O.** data structure in which the first incoming element is processed first. E.g., a queue in front of a bank.

In terms of our coding, we can take an example of user requests, which need to be implemented or responded to in order, where a queue may be necessary.

Queue has a few methods, like before:

1. enqueue() {similar to push}
2. dequeue() {like pop but removes from the start}
3. peek() {like peek but watches first element instead of last}

This can also be done using two approaches in JS array and linked list, but the array approach is not good for queue!—> *This is because of the dequeue method, where we needed to use shift(), which has linear time complexity O(n)—>since after the first array element is removed, every other element shifts one place to the left.*

![image.png](image%202.png)

```jsx
//* Array Implementation -- Less Efficient

class Queue {
  constructor() {
    this.items = [];
  }
  //* O(1)
  enqueue(value) {
    this.items.push(value);
  }
  //* O(n)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
  //* O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  //* O(1)
  isEmpty() {
    return this.items.length === 0;
  }
  //* O(n)
  print() {
    console.log('Start -->', this.items.join('->'), '--> End');
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
// console.log(queue.peek());
queue.print();
```

### Linked List

The first element(or called node) in a linked list will not contain any previous element—>like the first bogie or engine room of a train (which itself is runnable), and other bogies can be connected to the end of it.

Real-life use case of linked list maybe a music playlist. Using array, it would be pretty difficult to for eg shuffle the list, but using a linked list, we just get each node and change/shuffle its previous or next node.

![image.png](image%203.png)

**Concept of linked list:**

- The **first node** of the linked list will contain no previous node, but will contain a next node
- All the other nodes or elements will each contain a previous node and a next node
- The **last node** of a linked list will have a previous node but no next node
    
    ![image.png](image%204.png)
    
    The individual packets(nodes) will contain the data, and next, which contains the reference of the next element.
    

**Three types of linked list:**

![Singly Linked List](image%205.png)

Singly Linked List

![Doubly Linked List](image%206.png)

Doubly Linked List

![Circular Linked List](image%207.png)

Circular Linked List

Simple node implementation:

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(10);
//* {value: 10, next: null}
head.next = new Node(20);
//* { value: 10, next: { value: 20, next: null }}
head.next.next = new Node(30);

// console.log(head);

//* To print
let temp = head; // We took a temporary variable so that we dont actually lose the original linked list while reassigning the value

while (temp !== null) {
  console.log(temp.value, '');
  temp = temp.next;
}

```

**Why linked list is so important:**

- We can implement many data structures with linked list like:
    - Stack
    - Queue
    - Dequeue
- If we delete something from linked list, the time compleciy is not O(n), rather O(1)! If we delete/add sth:
    - We remove/add the node or element
    - Delete/add the reference to previous node
    - Delete/add the reference to the next node
    - Connect reference from previous node to the next node of the element we removed, thats it!
    
    ![image.png](image%208.png)
    

![image.png](image%209.png)

**Linked list methods:**

- append() —>like push, adding a node at the last
- prepend() —>push a node to the beginning like unshift
- insert()—>insert in place
- remove()—>remove element from place

**Linked List Implementation:**

```jsx
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
```

**insert():**

![image.png](image%2010.png)

> Only the linked list will have a head/tail. Individual nodes will have only value/next. Nodes will not have a head/tail.
> 

Remember:

- `next` is the only pointer on a `Node`.
- `head` and `tail` belong to the `LinkedList`.
- When inserting at the front, update the new node’s `.next` to point to the old head and then update `this.head`.

**Queue Implementation using Linked List:**

```jsx
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
```

We can see for queue, the dequeue method is optimised to O(1) instead of O(n) we got for array implementation.

**Data structures we now learned:**

1. Array
2. Objects
3. Set
4. Map
5. Stack
6. Queue
7. Linked List