//load env variable
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDB = require("../server/config/connectToDB.js");
const BlogController = require("../server/Controler/BlogController.js");
const UsersController = require("../server/Controler/UsersController.js");
const requireAuth = require("../server/midelwere/requireAuth.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const app = express();
//configer
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
connectToDB();

//Routers
//for authantication
app.post("/signup", UsersController.signup);
app.post("/login", UsersController.login);
app.get("/logout", UsersController.logout);
app.get("/check-Auth", requireAuth, UsersController.checkAuth);
//Routes for other forms

app.get("/notes", BlogController.fatchAllBlogs);
//get note by id
app.get("/notes/:id", BlogController.fatchUserBlogs);
//create
app.post(
  "/notes",
  requireAuth,
  upload.single("image"),
  BlogController.createBlogs
);

//update
app.put("/notes/:id", requireAuth, BlogController.updateBlogs);
//delete
app.delete("/notes/:id", requireAuth, BlogController.deleteBlogs);

//port part
app.listen(process.env.PORT);
