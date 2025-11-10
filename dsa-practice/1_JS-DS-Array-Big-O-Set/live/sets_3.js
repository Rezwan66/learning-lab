// Array to a unique Set
const array = ['apple', 'banana', 'mango', 'apple'];

const set = new Set(array);

set.add('tomato');

// set.forEach(value => console.log(value)); // set only has forEach method

// Set to array
// Array has many other methods so often we will need to convert from set (after removed duplications) to an array
const test = Array.from(set);

test.push('dragonfruit');

console.log(test);
