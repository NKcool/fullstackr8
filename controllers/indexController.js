const User = require("../models/userModel");
const { sendToken } = require("../utils/auth");

exports.homepage = (req, res, next) => {
    res.send("This is homepage...");
    // res.json({})
};
exports.signup = async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email }).exec();
        if (user) {
            return res.status(501).json({ message: "user exists" });
        }
        const newUser = new User(req.body);
        user = await newUser.save();
        res.json(user);
    } catch (error) {
        res.status(501).json({ message: error.message });
    }
    // res.json({})
};

exports.signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }

        const matchpassword = user.comparepassword(password);

        if (!matchpassword) {
            return res.status(500).json({ message: "wrong credientials" });
        }

        sendToken(user, req, res, 200);
    } catch (error) {
        res.status(501).json({ message: error.message });
    }
    // res.json({})
};

exports.signout = (req, res, next) => {
    res.clearCookie("token");
    res.status(200).json({ message: "logged out sexsexfully" });
};
