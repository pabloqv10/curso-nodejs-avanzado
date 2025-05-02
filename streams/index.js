import fs from 'node:fs';

const readStream = fs.createReadStream('file.txt', 'utf-8');

readStream.on('data', (chunk) => {
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('end');
});