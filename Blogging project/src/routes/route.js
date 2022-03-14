const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const BlogController = require("../controllers/blogController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

// author api

router.post("/author", AuthorController.createAuthor);
router.post("/blog", BlogController.createBlog);

// Get /blogs
router.get("/blogslist", BlogController.getSpecificBlogs);
router.put("/updateBlog/:id", BlogController.updateBlog);
router.delete("/blog/:blogId", BlogController.deleteBlog);

module.exports = router;
