//take commandline
//mentor says promises and callbacks are the same
/*let arg = process.argv.slice(2); //just take the two parameters
const request = require('request');
const fs = require('fs');
const { index } = require('https://api.thecatapi.com/v1/breeds/search');

request(`${arg[0]}`, (error, response, body) => {


  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  fs.readFile(`${arg[0]}`, 'utf8', (error, body) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(body);
    console.log(JSON.stringify(body));
  });

  console.log(body);

  //fs.writeFile(`${arg[1]}`, body, error => {   //file pathway // the content
  // if (error) {
  //   console.error(error);
  //  return;
});
//file written successfully
///});
//});

*/
/*
let arg = process.argv.slice(2); //just take the two parameters
console.log(arg);
console.log(arg[0]);
const request = require('request');
const fs = require('fs');
//const { index } = require('https://api.thecatapi.com/v1/breeds/search');

request(`https://api.thecatapi.com/v1/breeds/search?q=sib`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
/*
  fs.readFile(`${arg[0]}`, 'utf8', (error, body) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(body);
    console.log(JSON.stringify(body));
  });
*/

/*
 // request.get(`${arg[0]}`, 'utf8', (body) => {
  //  console.log(JSON.stringify(body));
  //});

  //console.log(body);

  //fs.writeFile(`${arg[1]}`, body, error => {   //file pathway // the content
  // if (error) {
  //   console.error(error);
  //  return;

*/
const breed = process.argv[2];
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body);

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

  if (data[0]) {
    console.log(data[0]);
  } else if (!data[0]) {
    console.log("cat breed not found");
  } else if (error) {
    console.log("error occurs", error);
  }

  
  /*console.log(data[0]);
  //if (!data[0]) {
    console.log("error");
  } else {
    console.log;
  } */
});

//https://api.thecatapi.com/v1/breeds/search?q=sib

//`https://api.thecatapi.com/v1/breeds/search?q=${breed}`