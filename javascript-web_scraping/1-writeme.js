#!/usr/bin/node

// Write a script that writes a string to a file

const fs = require('fs');

const filePath = process.argv[2];
const strContent = process.argv[3];

fs.writeFile(filePath, strContent, { encoding: 'utf8' }, err => {
  if (err) {
    console.error(err);
  }
});
