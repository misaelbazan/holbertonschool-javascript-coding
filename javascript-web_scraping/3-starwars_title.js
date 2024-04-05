#!/usr/bin/node

// Write a script that prints the title of a  Star Wars movie

const requestURL = "https://swapi-api.hbtn.io/api/films/" + process.argv[2];
const request = require('request');

request(requestURL, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
