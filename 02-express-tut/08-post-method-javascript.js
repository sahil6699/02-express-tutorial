const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");
//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

//set people router
app.use("/api/people/", people);

//set login router
app.use("/api/login/", auth);

app.listen(5000, () => {
  console.log("server is listening on port", 5000);
});
