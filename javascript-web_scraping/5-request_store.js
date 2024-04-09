#!/usr/bin/node

// Write a script that gets the contents of a wabpage and stores it in a file
// argv[1] ==> URL to request
// argv[2] ==> FILE PATH to store the body response

const requestURL = process.argv[2];
const fileName = process.argv[3];
const request = require('request');
const fs = require('fs');

request(requestURL, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(fileName, body, { encoding: 'utf8' }, err => {
      if (err) {
        console.error(err);
      }
    });
  }
});
