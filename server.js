const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();
const GoogleStrategy = require("passport-google-oauth20");
const passport = require("passport");

// Setup app
app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Use CSS style sheet
app.use(express.static(__dirname + "/client/css"))

// Setting up authentication through Google

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost300/auth/google/callback"
},
    function(accessToken, refreshToken, profile,cb)
))

app.route("/")
    .get((req, res) => {
        res.sendFile(__dirname +  "/client/static-pages/login.html")
    });


app.listen(process.env.PORT || 3000, () => console.log("Server running"));