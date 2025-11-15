//^ static - with static, we can set a property or method of a class as static. When we make them static, we can access those from a single memory location reference i.e. we can count the value from the same memory location. dynamic means changing.

class Counter {
  static count: number = 0; //we initialized here directly so no need for constructor //& static

  static increment() {
    return (Counter.count += 1); //* when we set a property as static, it becomes a premium, one-memory-location value of the Counter class, hence we need to access it from Counter itself
  }
  static decrement() {
    return Counter.count - +1;
  }
}

// const instance1 = new Counter(); //no param since no constructor //@ ekta memory
// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());

// const instance2 = new Counter(); //@arekta memory
// console.log(instance2.increment());
// console.log(instance2.increment());

// //& If we want the same memory for all instances for count-->hence set count as static
// const instance3 = new Counter(); //@arekta memory
// console.log(instance3.increment());
// console.log(instance3.decrement());

//$ We can also set methods as static, then we even dont need to create instance of the class
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
