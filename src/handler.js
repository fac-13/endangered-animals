// Imports
const fs = require('fs')
const path = require('path')


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



    

    // Handler Function for Static Files



    // Handler Function for Autocomplete Results List
    const handleResultsList = (req, res) => {
        console.log('in results lists function')
    }



    // Exports



module.exports = {handleHome};