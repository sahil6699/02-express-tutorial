const express = require("express");
const router = express.Router();

let { people } = require("../data");

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide the value" });
  }
  res.status(201).json({ success: true, person: name });
});

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide the name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // console.log(id, name);
  // res.send("hello world");
  const person = people.find((person) => person.id === Number(id));
  console.log(person);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `The person with ${id} doesn't exist` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

router.delete("/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
