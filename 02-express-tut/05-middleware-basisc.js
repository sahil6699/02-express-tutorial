const express = require("express");
const logger = require("./logger");
const app = express();

//req => middleware => response
//the middleware  we mention in app.use gets applied to all the routes - if it is placed at the top
//the order matters - if we apply it to below a route then it would not be applied to the route above it would only be applied to all the routes which are below it
//hence we keep the middleware which has to be applied on all the routes on the top

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});
app.use(logger);

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port ", 5000);
});
