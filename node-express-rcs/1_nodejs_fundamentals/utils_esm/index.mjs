// const { add } = require('./add');
// const { subs } = require('./subs');

// module.exports = { add, subs };

import { add } from './add.mjs';
import biyog from './subs.mjs';

// console.log(add(4, 3));
// console.log(biyog(9, 6));

export default { add, biyog };
