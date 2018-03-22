// Imports
const fs = require('fs');
const path = require('path');
const logic = require('./logic');
const dataList = require('./list.json');

//Handle calls to the home page
const handleHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');

  fs.readFile(filePath, (error, file) => {
      if (error) {
          console.log(error);
          response.writeHead(500, { 'Content-Type': 'text/html' });
          response.end('<h1>Sorry we can\'t find the home page</h1>');
      } else {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.end(file);
      }
  })
}

// Handler Function for Autocomplete Results List
const handleResultsList = (request, response) => {
  // const filePath = path.join(__dirname, 'logic.js'); 

  const queryString = request.url.split("?")[1];

  console.log("handleResults", queryString);

  const dataBack = logic.filterSpecies(dataList.result, queryString);

  let result = [];

  dataBack.forEach(function(item) {
    result.push(`<option value="${item}">`);
  });

  console.log(result);

}


// Handler Function for Static Files

const handleStatic = (request, response) => {
  
  const extension = request.url.split(".")[1];
  
  const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/js',
      ico: 'image/x-icon'
  }

  const filePath = path.join(__dirname, '..', request.url)

  fs.readFile(filePath, (error, file) => {
      if (error) {
          response.writeHead(500, { 'Content-Type': 'text/html' });
          response.end('<h1>Sorry we can\'t find the static file</h1>');
      } else {
          response.writeHead(200, { 'Content-Type':`${extensionType[extension]}` });
          response.end(file);
      }
  })

}


// Exports

module.exports = { handleHome, handleStatic, handleResultsList };