require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// databaseconnection
require("./models/database").databaseconnection();

const indexRouter = require("./routes/indexRoute");

app.use(require("cors")({ credentials: true, origin: process.env.origin }));

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
