const express = require("express");
const logger = require("./logger");
const app = express();

//req => middleware => response
//the middleware  we mention in app.use gets applied to all the routes - if it is placed at the top
//the order matters - if we apply it to below a route then it would not be applied to the route above it would only be applied to all the routes which are below it
//hence we keep the middleware which has to be applied on all the routes on the top
// app.use(logger);

//we can give the path to the app.use
// aur app.use ke andar ke middleware sirf unn routes pr apply hoga jo iss mentioned routes ke baad ayenge
// for eg: route:- /api , tuh middleware khali /api/productcs , /api/items/teddy
// in jaise routes pr hi apply hoga , baki kisi route pr apply ni hoga
app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.get("/api/people", (req, res) => {
  res.send("People");
});

app.listen(5000, () => {
  console.log("server is listening on port ", 5000);
});
