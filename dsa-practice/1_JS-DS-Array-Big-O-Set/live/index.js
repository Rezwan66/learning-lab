// const startTime = performance.now(); granular and useful time measurement
// console.time('task'); another less accurate way
const firstArray = [];
const secondArray = [];
for (let i = 0; i < 600000; i++) {
  if (i < 300000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}
console.log('first array:', firstArray.length);
console.log('second array:', secondArray.length);

// console.timeEnd('task');
// const endTime = performance.now();

// console.log(`This code took ${endTime - startTime} ms`);

const firstUserList = firstArray.map(number => ({ userId: number }));
const secondUserList = secondArray.map(number => ({ userId: number }));

console.time('find');
// const user = secondUserList.find(user => user.userId === 500000); O(n)
const user = secondUserList[500000]; // O(1)
console.timeEnd('find');
