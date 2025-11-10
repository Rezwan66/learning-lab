const array = ['apple', 'banana', 'mango', 'apple'];

const set = new Set(array);

set.add('tomato');
set.delete('banana');
console.log(set.has('dragonfruit'));
console.log(set);
