const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const app = express();

//req => middleware => response
// the way we execute multiple middleware functions is by passing them in a array
// the order of passing the in the array matters as this decides which middleware will run first
//here logger  will run first then authorize
// app.use([logger, authorize]);

//we can give the path to the app.use
// aur app.use ke andar ke middleware sirf unn routes pr apply hoga jo iss mentioned routes ke baad ayenge
// for eg: route:- /api , tuh middleware khali /api/productcs , /api/items/teddy
// in jaise routes pr hi apply hoga , baki kisi route pr apply ni hoga
// app.use("/api", logger);

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
