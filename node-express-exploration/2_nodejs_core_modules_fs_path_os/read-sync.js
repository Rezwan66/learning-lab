const fs = require('fs');

console.log('Start Reading...');

try {
  //* We need 'utf-8' encoding for reading English language
  const data = fs.readFileSync('./data/diary.txt', 'utf-8');
  console.log('File Content:');
  console.log(data);
} catch (err) {
  console.error(err.message);
}

console.log('Finished');
