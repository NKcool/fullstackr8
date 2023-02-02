const express = require("express");
const router = express.Router();
const { homepage, signup } = require("../controllers/indexController");

router.get("/", homepage);
// router.route("/").get(homepage);

// post /signup - create user
router.post("/signup", signup);

module.exports = router;
