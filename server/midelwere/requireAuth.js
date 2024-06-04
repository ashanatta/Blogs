const jwt = require("jsonwebtoken");
const User = require("../model/user");
async function requireAuth(req, res, next) {
  try {
    //read token of cookies
    const token = req.cookies.Authorization;
    //decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    //  find user useing decode sub
    const user = await User.findById(decoded.userId);
    if (!user) return res.sendStatus(401);
    //attach user to req
    req.user = user;
    //continue on
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
}

module.exports = requireAuth;
