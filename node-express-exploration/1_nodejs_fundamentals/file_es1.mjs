//# commonjs to esm

// const { a } = require('./file2');
import { a } from './file_es2.mjs';
// const { a: x } = require('./file3');
import { a as x } from './file_es3.mjs';
// const { add, subs } = require('./utils');
import utils from './utils_esm/index.mjs';
const { add, biyog: subs } = utils;
// console.log(a, x);

console.log(add(x, a));
console.log(subs(x, a));
