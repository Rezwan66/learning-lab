const array = ['apple', 'banana', 'mango', 'apple'];

// brute force
const removeDupArr = arr => {
  const newArr = [];
  arr.forEach(value => {
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  });

  return newArr;
};
console.time('array');
console.log(removeDupArr(array));
console.timeEnd('array');

// Set implementation
const removeDupSet = arr => {
  const set = new Set(arr);

  return Array.from(set);
};

console.time('set');
console.log(removeDupSet(array));
console.timeEnd('set');
