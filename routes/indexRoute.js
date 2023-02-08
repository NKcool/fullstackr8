const express = require("express");
const router = express.Router();
const {
    homepage,
    signup,
    signin,
    signout,
    sendmail,
    forgetpassword,
    upload,
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

// /reset-password
// update/:id
// delete/:id

// get /send-mail - logout user
router.get("/send-mail", sendmail);

// get /forget-password - send mail
router.get("/forget-password/:id", forgetpassword);

// get /upload - upload image
router.get("/upload", upload);

// /delete-upload

// cloudinary.uploader.destroy('zombie', function(result) { console.log(result) });
module.exports = router;
