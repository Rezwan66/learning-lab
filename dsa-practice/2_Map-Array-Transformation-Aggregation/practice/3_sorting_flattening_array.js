// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ['Banana', 'apple', 'Cherry', 'date'];
// In-place sorting O(n) - Mutable
const sortedNumbers = numbers.sort((a, b) => a - b);
// a-b: ascending order; b-a: descending order
// console.log(
//   `[${numbers}] is the same as [${sortedNumbers}] now. Hence the main array is also sorted!`
// );
fruits.sort((a, b) => b.localeCompare(a));
// console.log(fruits);

// Nested array --> flat
// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];
// const flattArr = arr.flat(2);
// const flattArr = arr.flat(Infinity);
// console.log(flattArr);

const tagsFromPosts = [
  ['javascript', 'react', 'css'],
  ['node', 'express'],
  ['css', 'html', 'react'],
];
// console.log(tagsFromPosts.flat());
const filterTags = [...new Set(tagsFromPosts.flat())];
// console.log(Array.from(filterTags));
console.log(filterTags);
