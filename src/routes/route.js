const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogsController")
const MiddleWare = require("../middlewares/Auth.js")

//API's-creating Author
router.post("/authors", authorController.createAuthor)

router.post("/login", authorController.authorLogin);

//API's Blog
router.post("/blogs", MiddleWare.autherAuthentication, blogController.createBlog);

router.get("/blogs", MiddleWare.autherAuthentication, blogController.getSpecificAllBlogs);

router.put("/blogs/:blogId", MiddleWare.authorAuthorization, blogController.updateBlog);

router.delete("/blogs/:blogId", MiddleWare.authorAuthorization, blogController.deleteBlog);

router.delete("/blogs", MiddleWare.authorAuthorization, blogController.deletedByQueryParams);


module.exports = router;
