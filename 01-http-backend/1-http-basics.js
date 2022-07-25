const http = require("http");

const { readFileSync } = require("fs");
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

//createServer method gets hit every time user hits the server
const server = http.createServer((req, res) => {
  const url = req.url;

  console.log(url);

  if (url === "/") {
    //home page

    //meta data for our response
    // status-code , {type-of-data we are sending}
    res.writeHead(200, { "content-type": "text/html" });
    //we must always include res.end for each response
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    //about page
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else if (url === "/styles.css") {
    //styles
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/logo.svg") {
    //logo svg
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    //front end js
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    //404 page
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 page</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("The server is up and running on port ", 5000);
});
