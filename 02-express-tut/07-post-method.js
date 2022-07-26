const express = require("express");
const app = express();
let { people } = require("./data");

//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  //using javascript to check if we entered a particular text or not
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }
  console.log(req.body);
  res.status(401).send("Please enter the given credentials");
});

app.listen(5000, () => {
  console.log("server is listening on port", 5000);
});
