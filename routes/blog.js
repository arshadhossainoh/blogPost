const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", function (req, res) {
  res.render("posts-list");
});

router.get("/new-post", async function (req, res) {
  const authors = await db.getDb().collection("authors").find().toArray();
  res.render("create-post", { authors });
});

// router.post('/posts', (req, res){
//   const newPost = {
//     title: req.body.title,
//     summary: req.body.summary,
//     body: req.body.body,
//     date: new Date()
//   }
// })

module.exports = router;
