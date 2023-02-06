const express = require("express");
const router = express.Router();
const {
    homepage,
    signup,
    signin,
    signout,
} = require("../controllers/indexController");
const { isLoggedIn } = require("../utils/auth");

router.get("/", isLoggedIn, homepage);
// router.route("/").get(homepage);

// post /signup - create user
router.post("/signup", signup);

// post /signin - login user
router.post("/signin", signin);

// get /signout - logout user
router.get("/signout", signout);

module.exports = router;
