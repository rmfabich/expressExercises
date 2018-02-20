const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const axios = require('axios');

app.use(express.static('public'));
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

const db = [{
     userName:"barfDude",
     password:"barfDudeRules123",
     email:"farf@snarf.biz"
   }, 
   {
     userName:"trobis",
     password:"trouble1",
     email:"gobis@snobis.biz"
    },
    {
      userName: "Fibbis",
      password: "donLie2",
      email: "AbisFibbis@DingusRegis.biz"
}];

//below is some code that authenticates a user using json web tokens. However, it doesn't 
//check whether the password is correct. Modify and test the server (using postman) to correctly
//compare whether the password is correct. 

app.get("/", (req, res) => {
    res.sendfile('index.html');
});

app.get("/authenticate", (req, res) =>{
    var match = db.find((entry)=>{
        if (entry.userName === req.body.userName){
            return true;
        }
     });
      if (match){
            var token = jwt.sign(user, app.get('superSecret'), {
            //expiresInMinutes: 1440 // expires in 24 hours, no longer valid, probs deprecated
         });
        res.json({
         message:"success",
         token:token
        }); 
      }
});

//You'll actually NEVER want to store passwords as plain text - you'll always hash them. Import a hashing library, 
//make a /create route and handler that puts a new user into the db const - however, you'll have to use
//a hashing library. You'll also need to modify the authenticate handler to compare hashes rather than plaintext.
//note - this will break every other entry in your database, but it should work for any new entries you create. 


app.listen(5000, function() {
   console.log("Listening on 5000");
});
