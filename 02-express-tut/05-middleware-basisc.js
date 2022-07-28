const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
const app = express();

//req => middleware => response
//options for setting up of middleware = own / express / third party

//now app.use expects a middleware as argument viz express.static
//this middle is always looking for a static/public folder to display all the static files within it
// it has some code writeen in it like we wrote for authorize middleware , hence it is able to show us the public files we have written
// app.use(express.static("./public"));

//third party middleware function
//tiny returns the method the port and the time of the request
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});
//how to apply multiple middleware to a single route
//now logger and authorize will only be applied to the api/items route
app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.get("/api/people", (req, res) => {
  res.send("People");
});

app.listen(5000, () => {
  console.log("server is listening on port ", 5000);
});
