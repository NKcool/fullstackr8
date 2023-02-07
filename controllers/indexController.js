const User = require("../models/userModel");
const { sendToken } = require("../utils/auth");
const nodemailer = require("nodemailer");

exports.homepage = (req, res, next) => {
    res.send("This is homepage..." + req.id);
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
        let user = await User.findOne({ email }).select("+password").exec();
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

exports.sendmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(404).json({ message: "user not found." });
        }
        const pageurl =
            req.protocol +
            "://" +
            req.get("host") +
            "/forget-password/" +
            user._id;
        // res.status(200).json({ message: pageurl });

        const transport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "dhanesh1296@gmail.com",
                pass: "rriexnwtxmiwexld",
            },
        });

        const mailOptions = {
            from: "Dhanesh Pvt. Ltd.<dhanesh1296@gmail.com>",
            to: req.body.email,
            subject: "Password Reset Link",
            text: "Do not share this link to anyone.",
            html: `<a href=${pageurl}>Password Reset Link</a>`,
        };

        transport.sendMail(mailOptions, async (err, info) => {
            if (err) return res.status(500).json({ message: err });
            // console.log(info);
            await User.findByIdAndUpdate(user._id, { passwordResetToken: 1 });
            res.status(200).json({
                message: "Email sent! check inbox/spam",
            });
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

exports.forgetpassword = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
            .select("+password")
            .exec();
        if (user.passwordResetToken === 1) {
            user.passwordResetToken = 0;
            user.password = req.body.password;
            await user.save();
            res.status(200).json({ message: "password changed!" });
        } else {
            res.status(500).json({ message: "link expired! try again" });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
