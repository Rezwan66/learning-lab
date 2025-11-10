//* Stateless vs Stateful

// const counter = amount => {
//   let count = 0;
//   count += amount;
//   return count;
// };
// console.log(counter(3));
// console.log(counter(2));

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
