const http = require("http");

//createServer method gets hit every time user hits the server
const server = http.createServer((req, res) => {
  //meta data for our respone
  // status-code , {type-of-data we are sending}
  res.writeHead(200, { "content-type": "text/html" });
  //we must always include res.end for each response
  res.write("<h1>Home Page</h1>");
  res.end();
});

server.listen(5000, () => {
  console.log("The server is up and running on port ", 5000);
});
