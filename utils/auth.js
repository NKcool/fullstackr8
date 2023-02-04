const jwt = require("jsonwebtoken");

exports.sendToken = (user, req, res, statuscode) => {
    const token = user.gettoken();

    res.cookie("token", token, {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        // secure: true
    });

    res.json({ message: "user logged in", token });
};
