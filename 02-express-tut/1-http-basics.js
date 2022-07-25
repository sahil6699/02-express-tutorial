const http = require("http");

const { readFileSync } = require("fs");
const homePage = readFileSync("./index.html");

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
