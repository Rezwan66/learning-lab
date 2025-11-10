//* Generate a lookup table

//? Input
const postsArray = [
  { id: 'p-101', title: 'Intro to SQL', author: 'Alex' },
  { id: 'p-102', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-103', title: 'Understanding Reduce', author: 'Chris' },
  { id: 'p-104', title: 'CSS Grid Tricks', author: 'Alex' },
];

//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }

//? My Implementation
// const map = new Map();
// postsArray.forEach(val => {
//   map.set(val.id, val);
// });
// const obj = Object.fromEntries(map);
// console.log(obj);

//? Solve
const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});
// console.log(lookupTable);

// To find an element:
//! This is bad: O(n)
//! const myPost = postsArray.find(post => post.id === 'p-103');
// Using the loopupTable
// This is good: O(1)
const myPost = lookupTable['p-103'];
// console.log(myPost);

for (let post in lookupTable) {
  console.log(lookupTable[post]);
}
