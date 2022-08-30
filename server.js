const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const URI = process.env.DB_URL;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is success");
});

const articlesRouter = require("./routes/articles");
app.use("/articles", articlesRouter);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
