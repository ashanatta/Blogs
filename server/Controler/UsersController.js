const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const mongoose = require("mongoose");

async function signup(req, res) {
  //get form off req body
  const { email, password } = req.body;
  const hashedPasword = bcrypt.hashSync(password, 8);

  //create a user with data
  await User.create({ email, password: hashedPasword });
  //response
  res.sendStatus(200);
}
const generateToken = (userId) => {
  // Define payload with user ID
  const payload = { userId };
  // console.log("Userid is=>", userId);
  // Generate token with payload and secret key
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" }); // Replace 'your_secret_key' with your actual secret key
  return token;
};
async function login(req, res) {
  try {
    //get the email and password off req body
    const { email, password } = req.body;
    //find the user of requested email
    const user = await User.findOne({ email });
    // console.log("Login User=>", user);
    if (!user) return res.sendStatus(401);

    //compare sent-in password with found user password hash
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.sendStatus(401); // Check password match
    const token = generateToken(user._id);

    res.cookie("Authorization", token, {
      // expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({ user });
  } catch (error) {
    console.log("Login Error=>", error);
  }
}

function logout(req, res) {
  res.clearCookie("Authorization");
  res.sendStatus(200);
}

function checkAuth(req, res) {
  // console.log(req.user);
  res.sendStatus(200);
}
module.exports = {
  signup,
  login,
  logout,
  checkAuth,
};
