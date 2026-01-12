const { a } = require('./file2');
const { a: x } = require('./file3');
// const { add } = require('./utils/add');
// const { subs } = require('./utils/subs');
const { add, subs } = require('./utils');
// console.log(a, x);

console.log(add(x, a));
console.log(subs(x, a));
