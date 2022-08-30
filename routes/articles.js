const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");

//Get All Articles
router.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//Add Artcles
router.post("/add", (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    author: req.body.author,
  });

  newArticle
    .save()
    .then(() => res.json("New article added"))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

//Find Article by ID
router.get("/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

//Find Article by ID and Update
router.put("/update/:id", (req, res) => {
  Articles.findByIdAndUpdate(req.params.id)
    .then((article) => {
      article.title = req.body.title;
      article.article = req.body.article;
      article.author = req.body.author;

      article
        .save()
        .then(() => res.json("Article is updated"))
        .catch((err) => res.status(400).json(`Error ${err}`));
    })
    .catch((err) => res.status(400).json(`Error ${err}`));
});
//Find Article by ID and Delete
router.delete("/:id", (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article is deleted"))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

module.exports = router;
