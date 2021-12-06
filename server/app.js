"use strict";

const env = process.env.NODE_ENV

const express = require("express");
const cors = require("cors");
const eventRouter = require("./routes/event-routes");
const userRouter = require("./routes/user-routes");
const tagRouter = require("./routes/tag-routes");
const session = require("express-session");
const MongoStore = require('connect-mongo') 
const path = require('path')

const app = express();
// if (process.env.NODE_ENV !== 'production') { app.use(cors()) }
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
    }));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(
    session({
        secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 6000000, // 10 mins
            httpOnly: true
        },
        // store the sessions on the database in production
        store: env === 'production' ? MongoStore.create({
                                                mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/UniConnect'
                                 }) : null
    })
);

app.use("/", userRouter)
app.use("/", eventRouter)
app.use("/", tagRouter)

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/login", "/dashboard", "/timeline", "/EventDetails",
    "/signup", "/past-events", "/upcoming-events", "/AccountSetup", "/dashboard", "/AddFriend",
    "/AnimatedBg", "/interestFinder", "/ResetPassword", "/Profile", "/UserProfile"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app;