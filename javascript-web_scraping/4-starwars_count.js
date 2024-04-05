#!/usr/bin/node

// Write a script that prints the number of movies where the character 
//   ID = 18, the script must user this ID for filtering the result

const requestURL = process.argv[2];
const request = require('request');
const characterID = "https://swapi-api.hbtn.io/api/people/18/";

request(requestURL, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const filmsObj = JSON.parse(body);
    const results = filmsObj.results;
    let count = 0;
    results.forEach(movie => {
      if (movie.characters.includes(characterID)) {
        count += 1;
      }
    });
    console.log(count);
  }
});
