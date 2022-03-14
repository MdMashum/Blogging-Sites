const authorModel = require("../models/author");

const createAuthor = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await authorModel.create(data);
    console.log(req.newAtribute);
    res.satus(201).send({ msg: savedData });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.createAuthor = createAuthor;
