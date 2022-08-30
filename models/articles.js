const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  author: { type: String, required: true },
});

const Articles = mongoose.model("articles", articleSchema);

module.exports = Articles;
