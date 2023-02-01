const express = require("express");
const router = express.Router();
const { homepage } = require("../controllers/indexController");

router.get("/", homepage);
// router.route("/").get(homepage);

module.exports = router;
