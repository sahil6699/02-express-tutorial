const http = require("http");

//createServer method gets hit every time user hits the server
const server = http.createServer((req, res) => {
  //to know what route we are hitting we use the url method
  console.log(req.url);

  //to know what kind of request is coming
  console.log(req.method);

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
