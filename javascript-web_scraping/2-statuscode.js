#!/usr/bin/node

// Write a script that display the status code of a GET request

const request = require('request');
const urlRequest = process.argv[2];
request(urlRequest, function (error, response, body) {
  console.log(`code: ${response.statusCode}`);
});
