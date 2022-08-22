const express = require("express");
const router = express.Router();
const houseReviews = require("../controllers/visitorGetReviewController");


// GET REVIEWS
router.get("/get-all-reviews", houseReviews.viewAllReviews);
router.post("/review-feedback", houseReviews.isReviewHelpful);
router.get("/get-single-review", houseReviews.viewSingleReview);

module.exports = router;
