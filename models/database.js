const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

exports.databaseconnection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/r8");
        console.log("database connected!");
    } catch (error) {
        console.log(error.message);
    }
};
