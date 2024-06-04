const mongoose = require("mongoose");
async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to database");
  } catch (error) {
    // console.log(error);
    console.log("db connection faild");
  }
}

module.exports = connectToDB;
