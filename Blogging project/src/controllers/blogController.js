const blogModel = require("../models/blog");

const createBlog = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await blogModel.create(data);
    console.log(req.newAtribute);
    res.status(201).send({ msg: savedData });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getSpecificBlogs = async function (req, res) {
  try {
    let data = req.query;
    let filter = {
      isDeleted: false,
      isPublished: true,
      ...data,
    };
    let getSpecificBlogs = await blogModel.find(filter);

    if (getSpecificBlogs.length == 0) {
      res.status(400).send({ status: false, data: "No blogs can be found" });
    } else {
      res.status(200).send({ status: true, data: getSpecificBlogs });
    }
  } catch (error) {
    res.status(400).send({ status: false, msg: error.message });
  }
};
const updateBlog = async function (req, res) {
  try {
    let data = req.body;
    let id = req.params.id;

    let result = await blogModel.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
    if (!result) return res.status(404).send({ msg: "Data Not Found" });
    res.status(200).send({ msg: result });
    if (!data) res.status(404).status(404).send({ error: "No data" });
    if (!id) return res.status(404).send({ error: "No Updated Data" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
//DELETE /blogs/:blogId

const deleteBlog = async function (req, res) {
  try {
    let blogId = req.params.id;
    // Check id is present or not***
    //  if(!blogId)  res.status(400).send({meg: "Id is Present"})
    let blogIdPresent = await blogModel.findById(blogId);
    // if (!blogIdPresent) {
    //  res.status(404).send("No blog exists");
    // }
    let delBlog = await blogModel.findOneAndUpdate(
      { _id: blogId },
      { isDeleted: true },
      { new: true }
    );
    res.send({ status: "Deleted", data: delBlog });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

module.exports.createBlog = createBlog;
module.exports.getSpecificBlogs = getSpecificBlogs;
module.exports.updateBlog = updateBlog;
module.exports.deleteBlog = deleteBlog;
