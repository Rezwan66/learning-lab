const path = require('path');

console.log('Current File Info:\n');
console.log('File Name:', __filename);
console.log('Directory:', __dirname);

console.log('\n' + '-'.repeat(50) + '\n');

//& Using an example file path
const filePath = '/shaikh/documents/nextLevel.pdf';

console.log('Analysing Path:', filePath + '\n');

console.log('Directory:', path.dirname(filePath));
// console.log('Base Name:', path.basename(__filename));
console.log('Base Name:', path.basename(filePath));
console.log('File Extension:', path.extname(filePath));
console.log('File Name:', path.basename(filePath, path.extname(filePath)));

console.log('\n' + '-'.repeat(50) + '\n');

const parsedPath = path.parse(filePath);
console.log('Parsed path object:\n', parsedPath);

console.log('\n' + '-'.repeat(50) + '\n');

console.log('Formatted Path:', path.format(parsedPath));
console.log('Formatted POSIX Path:', path.posix.format(parsedPath));
console.log('Formatted Win Path:', path.win32.format(parsedPath));
