const mongoose = require("mongoose");
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@pentcluster.sqlg3y1.mongodb.net/?retryWrites=true&w=majority`;
// connect to mongoose
mongoose.connect(url, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to MongoDB`);
  }
});

module.exports = { mongoose };
