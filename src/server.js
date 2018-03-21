// Load http module and router module
const http = require('http');
const router = require('./router');

// Allow use of 'PORT' environment variable if specified, otherwise 3000
const PORT = process.env.PORT || 3000;

// Create server
const server = http.createServer(router);

server.listen(PORT, function(){
  console.log(`server listening on port: ${PORT}`)
})
 
