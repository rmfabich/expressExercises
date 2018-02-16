var express = require("express");
var app = express();

app.get("/", (req, res)=> {
    res.sendfile('index.html');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});

//TODO: going over the req res stuff
