const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  //using javascript to check if we entered a particular text or not
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }
  console.log(req.body);
  res.status(401).send("Please enter the given credentials");
});

module.exports = router;
