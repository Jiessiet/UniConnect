const express = require("express");
const cors = require("cors");
const eventRouter = require("./routes/event-routes");

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/", eventRouter)

module.exports = app;