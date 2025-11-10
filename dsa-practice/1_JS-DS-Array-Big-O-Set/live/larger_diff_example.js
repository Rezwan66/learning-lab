// Create a big test array with duplicates
const bigArray = Array.from(
  { length: 100000 },
  () => Math.floor(Math.random() * 5000) // random numbers with duplicates
);

// ----- Brute force -----
const removeDupArr = arr => {
  const newArr = [];
  arr.forEach(value => {
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  });
  return newArr;
};

// ----- Set version -----
const removeDupSet = arr => {
  const set = new Set(arr);
  return Array.from(set);
};

// ----- Benchmark -----
console.time('Brute force O(n²)');
removeDupArr(bigArray);
console.timeEnd('Brute force O(n²)');

console.time('Set O(n)');
removeDupSet(bigArray);
console.timeEnd('Set O(n)');
