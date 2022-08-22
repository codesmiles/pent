const Review = require("../models/review.model");

module.exports.viewAllReviews = async (req, res) => {
  // get all reviews from the database
  await Review.find({}, (err, allReviews) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        successful: true,
        data: allReviews,
      });
    }
  });
};

module.exports.viewSingleReview=(req,res)=>{

};
module.exports.isReviewHelpful = async (req, res) => {
  const { isHelpful, reviewId } = await req.body;

  if (isHelpful === true) {
    await Review.findOne({ _id: reviewId }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.isReviewHelpful++;
        return res.json({
          successful: true,
          message: "review successfully incremented",
          data,
        });
      }
    });
  }
};
