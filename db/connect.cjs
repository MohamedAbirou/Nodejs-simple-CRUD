const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch(() => {
      console.log("Connection failed.");
    });
};

module.exports = { connectDB };
