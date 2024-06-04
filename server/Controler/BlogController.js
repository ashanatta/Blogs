const Blog = require("../model/Blogs");

const fatchAllBlogs = async (req, res) => {
  const userId = req.query.user_id;
  const notes = userId
    ? await Blog.find({ user: userId }).exec()
    : await Blog.find({}).exec();
  res.json({ notes });
};

const fatchUserBlogs = async (req, res) => {
  const noteId = req.params.id;
  const note = await Blog.findById(noteId).exec();
  res.json({ note });
};
// Fetch a single blog by ID without user restriction

const createBlogs = async (req, res) => {
  //get the send in data off  request body
  const title = req.body.title;
  const Discription = req.body.Discription;
  const category = req.body.category;
  const imageUrl = req.file.path;
  //create a node with it
  const note = await Blog.create({
    title: title,
    Discription: Discription,
    imageUrl: imageUrl,
    category: category,
    user: req.user._id,
  });

  //response with the new node
  res.json({ note: note });
};

const updateBlogs = async (req, res) => {
  //get the id off url
  const noteId = req.params.id;
  //get the data off the req body
  const title = req.body.title;
  const Discription = req.body.Discription;
  const imageUrl = req.body.imageUrl;
  const category = req.body.category;
  //find and update the record
  await Blog.findOneAndUpdate(
    { _id: noteId, user: req.user._id },
    {
      title: title,
      Discription: Discription,
      imageUrl: imageUrl,
      category: category,
      //title,body we can write in both ways
    }
  );
  const note = await Blog.findById(noteId);
  //find update note

  //respond with it
  res.json({ note: note });
};
const deleteBlogs = async (req, res) => {
  try {
    // get id from URL
    const noteId = req.params.id;

    // delete the record
    const result = await Blog.deleteOne({ _id: noteId, user: req.user._id });

    // check if a document was deleted
    if (result.deletedCount === 1) {
      res.json({ success: "Delete successful" });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  fatchAllBlogs,
  fatchUserBlogs,
  createBlogs,
  updateBlogs,
  deleteBlogs,
};
