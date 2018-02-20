var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendfile('index.html');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});
