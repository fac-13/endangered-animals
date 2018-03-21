// create server

const http = require('http');
const router = require('./router');
const PORT = process.env.PORT || 3000;

const server = http.createServer(router);

server.listen(PORT, function(){
  console.log(`server listening on port: ${PORT}`)
})
 
