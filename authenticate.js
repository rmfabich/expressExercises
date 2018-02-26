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
//compare whether the password is correct. You also need to pass in a string as the second arg into jwt.sign(), 
//which will act as your secret

 function verifyToken(req, res, next) {
   var token = req.body.token;
    if (token){
        jwt.verify(token, "Secreet", (err, decode)=>{
            if (err) {
                res.send("Wrong token")
            } else {
                console.log(decode);
                res.locals.decode = decode
             next();
            }
        })
    }   else {
        res.send("No token")
    }
}
app.post("/getData", verifyToken, (req, res)=> {
    res.json("sensitive top secret NSA Crack data")
})
app.get("/", (req, res) => {
    res.sendfile('index.html');
});

app.post("/authenticate", (req, res) =>{
    var match = db.find((entry)=>{
        if (entry.userName === req.body.userName && entry.password === req.body.password){
            return true;
        }
     });
      if (match){
            var token = jwt.sign(req.body.userName, ('Secreet'), {
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


app.listen(8080, function() {
   console.log("Listening on 8080");
});
