const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();
const GoogleStrategy = require("passport-google-oauth20");
const passport = require("passport");
const mongoose = require("mongoose");

// Setup app
app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Use CSS style sheet
app.use(express.static(__dirname + "/client/css"))

// Setting up authentication through Google

app.use(passport.initialize () );
app.use(passport.session () );

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost300/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    (accessToken, refreshToken, profile,cb) => {
        User.findOrCreate({googleId: profile.id, name: profile.name.givenName}, function(err, user) {
            return cb(err, user);
        });
    }
));

passport.serializeUser((user, cb) => {
    cb(null, user.googleId);
});
passport.deserializeUser((id, done) => {
    isSecureContext.findOne({googleId: id}, (err, user) => {
        done(err, user);
    });
});

app.route("/")
    .get((req, res) => {
        res.sendFile(__dirname +  "/client/static-pages/login.html")
    });

app.get("/auth/google", passport.authenticate('google', {scope: ['profile']}));

app.get("/auth/google/callback",
    passport.authenticate('google', {failureRedirect: "/"}),
    (req, res) => {
        res.redirect("/");
    });


app.listen(process.env.PORT || 3000, () => console.log("Server running"));