const express = require("express");
const products = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.json([
    // { name: "john", age: 22 },
    // { name: "susan", age: 29 },
    products,
  ]);
});
app.listen(5000, () => {
  console.log("server is listening on port : ", 5000);
});
