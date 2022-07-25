const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("Hey! There user guy!!");
});

server.listen(5000, () => {
  console.log("The server is up and running on port ", 5000);
});
