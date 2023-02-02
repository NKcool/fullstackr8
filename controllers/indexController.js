const User = require("../models/userModel");

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
