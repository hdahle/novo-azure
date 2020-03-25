// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/api", function (req, res) {
    let s = "{ \"api\" : \"0.0.1\" ,"
        + " \"host\" : \"" + req.headers.host + "\", "
        + " \"key\" : \"" + process.env.REDISCACHEKEY + "\", "
        + " \"host\" : \"" + process.env.REDISCACHEHOSTNAME + "\", "
        + "}";
    res.send(s)
});

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => {
        console.log("Server is listening on port 3000 (possibly)...");
    }
);
