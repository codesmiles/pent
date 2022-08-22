const express = require("express");
const router = express.Router();
const userSignIncontroller = require("../controllers/userSigninController");
const userSignUpController = require("../controllers/userSignupController");
const checkUser = require("../middleware/isLoggedIn"); 
const postHouseReviews = require("../controllers/userPostReviewController");
// ROUTES
router.post("/sign-up", userSignUpController.signUp);
router.post("/sign-in", checkUser, userSignIncontroller.login);

// User post reviews
router.post("/post-review", checkUser, postHouseReviews.postReviews);

module.exports = router;
