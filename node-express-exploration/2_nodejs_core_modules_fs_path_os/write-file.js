const fs = require('fs');

const content1 = 'This is a content \nNode.js is awesome!!!';

try {
  fs.writeFileSync('./output/test-sync.txt', content1);
  console.log('File written Synchronously!');
} catch (err) {
  console.error(err.message);
}

//& Asynchronous

const content2 = 'This is a content too \nAsynchronous!!!';

fs.writeFile('./output/test-async.txt', content2, error => {
  if (error) {
    console.error(error.message);
  } else {
    console.log('File written Asynchronously!!!');
  }
});
