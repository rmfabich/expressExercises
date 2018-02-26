//This might be a huge undertaking, but I'm confident you can do it. As best you can on your own, get an express server 
//connected to a mongo database. Create, Read, Update, and Delete some data. Keep the data structure simple, like a collection

var MongoClient = require('mongodb').MongoClient
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/expressExercises");
var URL = 'mongodb://localhost:8080/mydatabase'
var express = require("express");
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
   });
var User = mongoose.model("User", nameSchema);

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
   
   app.post("/deletename", (req, res) => {
    var myData = new User(req.body);
    myData.remove()
    .then(item => {
    res.send("item deleted from database");
    })
    .catch(err => {
    res.status(400).send("unable to delete from database");
    });
   });

// app.get("/", (req, res) => {
//     res.sendfile('mongo.html');
// });

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/mongo.html");
   });
   
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});
