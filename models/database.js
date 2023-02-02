const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

exports.databaseconnection = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://dhanesh-malviya:dhanesh123@mastercluster.i7cpa.mongodb.net/medium-r8?retryWrites=true&w=majority"
        );
        console.log("database connected!");
    } catch (error) {
        console.log(error.message);
    }
};
