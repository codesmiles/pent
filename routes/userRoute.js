const express = require("express");
const router = express.Router();
const userSignIncontroller = require("../controllers/userSigninController");
const userSignUpController = require("../controllers/userSignupController");
const checkUser = require("../middleware/isLoggedIn"); //check if user is logged in
const houseReviews = require("../controllers/visitorGetReviewController");
const postHouseReviews = require("../controllers/userPostReviewController");
// ROUTES
router.post("/sign-up", userSignUpController.signUp);
router.post("/sign-in", checkUser, userSignIncontroller.login);

// User post reviews
router.post("/post-review", checkUser, postHouseReviews.postReviews);

// GET REVIEWS
router.get("/get-all-reviews", houseReviews.viewAllReviews);
router.post("/review-feedback", houseReviews.isReviewHelpful);
router.get("/get-single-review", houseReviews.viewSingleReview);

module.exports = router;
