// Import Handler Module
const handler = require('./handler');

const router = (req, res) => {
  let url = req.url;
  if (url === "/") {
    handler.handHome(req, res);
  } else if (url.indexOf("pub") !== -1) {
    handler.handleStatic(req, res);
  } else if (url === "/get-list") {
    handler.handleResultsList(req, res);
  } else {
    response.writeHead(404, "Content-Type: text/html");
    response.end("<h1>404 Not Found</h1>");
  }
};

module.exports = router;
