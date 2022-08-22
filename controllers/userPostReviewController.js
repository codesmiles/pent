const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Review = require("../models/review.model");

module.exports.postReviews = async (req, res) => {
  try {
    if (req.user) {
      let { _id, isLoggedIn } = req.user;
      if (isLoggedIn === true) {
        const user = await User.findOne({ _id });
        if (user) {
          let { title, houseLocation, description } = await req.body;
          const userId = _id;
          const newReview = new Review({
            userId,
            title,
            houseLocation,
            description,
          });

          newReview.save((err, data) => {
            errorDey(err);
            res.json({
              successful: true,
              message: `data has been saved`,
              data,
            });
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
