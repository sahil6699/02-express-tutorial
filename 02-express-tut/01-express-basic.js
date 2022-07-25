const express = require("express");

const app = express();

//this method will handle the get request on route /
app.get("/", (req, res) => {
  console.log("user hit the get request");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port ", 5000);
});

/*
  app.get
  app.post
  app.delete
  app.put
  app.delete
  app.all
  app.listen
  app.use
*/
