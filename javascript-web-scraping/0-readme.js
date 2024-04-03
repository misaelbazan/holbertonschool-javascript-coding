#!/usr/bin/node

// Import the fs module to perform file operations
const fs = require('fs');

// Process command line arguments
// process.argv[2] would ne the first argument passed by user
const fileName = process.argv[2];

if (!fileName) {
  console.log('Please provide a file name as an argument.');
  process.exit(1);
}

// Reading the file provided
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
