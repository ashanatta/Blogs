const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  Discription: String,
  imageUrl: String,
  category: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const blogs = mongoose.model("Blogs", BlogSchema);

module.exports = blogs;
