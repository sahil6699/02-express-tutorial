const express = require("express");
const app = express();
const path = require("path");

//setup static and middleware
//static files are those files which are once served not changed later
// html , css, js => js files are considered static because they are not causing the change in the backend
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.all("*", (req, res) => {
  res.status(404).send("request not found");
});

app.listen(5000, () => {
  console.log("server is listening on port ", 5000);
});
