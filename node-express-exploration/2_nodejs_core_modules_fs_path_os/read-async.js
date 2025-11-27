const fs = require('fs');

console.log('Start Reading...');

fs.readFile('./data/diary.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('error happened:', err.message);
  }
  console.log('File Content:');
  console.log(data);
});

console.log('This runs immediately --> no blocking!');
