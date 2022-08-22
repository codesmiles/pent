// jshint esversion: 6
require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoute");
const visitorRoutes = require("./routes/visitorsRoute")
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/visitor",visitorRoutes)


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
