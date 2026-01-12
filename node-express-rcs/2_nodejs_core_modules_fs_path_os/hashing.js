//! password123
//* jkjlkl;djklfjsdklfjskl;sd;klfjk

const crypto = require('crypto');

//* MD5 Hash
//! bad for security -- not recommended for security and its very fast. No option for salt rounds like we do in BCrypt!!
console.log('\nMD5 Hash:');
const md5Hash = crypto.createHash('md5').update('password123').digest('hex');
// const md5Hash2 = crypto.createHash('md5').update('password123').digest('hex');
console.log('Input: password123');
console.log('MD5 Hashed Pass:', md5Hash);
// console.log('MD5 Hashed Pass 2:', md5Hash2);

//* SHA-256 Hash
console.log('\nSHA-256 Hash:');
const sha256Hash = crypto
  .createHash('sha256')
  .update('password123')
  .digest('hex');
console.log('Input: password123');
console.log('SHA-256 Hashed Pass:', sha256Hash);

//* SHA-512 Hash -- even more secure
console.log('\nSHA-512 Hash:');
const sha512Hash = crypto
  .createHash('sha512')
  .update('password123')
  .digest('hex');
console.log('Input: password123');
console.log('SHA-512 Hashed Pass:', sha512Hash);
