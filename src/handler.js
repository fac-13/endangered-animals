// Imports
const fs = require('fs');
const path = require('path');
const logic = require('./logic');


//Handle calls to the home page
const handleHome = (request, response) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html')

    fs.readFile(filePath, (error, file) => {
        if(error) {
            console.log(error);
            response.writeHead(500, {'Content-Type' : 'text/html'});
            response.end('<h1>Sorry we can\'t find the home page</h1>');
        } else {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(file);
        }
    })
}
