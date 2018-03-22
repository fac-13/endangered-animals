// Import Handler Module
const handler  = require('./handler');

const router = (request, response) => {
  let url = request.url;
  if (url === "/") {
    handler.handleHome(request, response);
  } else if (url.indexOf("public") !== -1) {
    handler.handleStatic(request, response);
  } else if (url.indexOf("/get-list") !== -1) {
    console.log("Router get list request working"); 
    handler.handleResultsList(request, response);
  } else if (url === "/animal-detail") {
    handler.handleAnimalDetail(request, response);
  } else {
    response.writeHead(404, "Content-Type: text/html");
    response.end("<h1>404 Not Found</h1>");
  }
};

module.exports = router;



