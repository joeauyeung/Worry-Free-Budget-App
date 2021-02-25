const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.route("/")
    .get((req, res) => {
        res.sendFile("C:\Users\Joe Au-Yeung\Documents\Webdev\Budget_App\Staging\client\public\login.html")
    });


app.listen(process.env.PORT || 3000, () => console.log("Server running"));