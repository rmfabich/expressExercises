var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var db = [{
    userName:"barfDude",
    password:"barfDudeRules123",
    email:"farf@snarf.biz"
   }, 
   {
    userName:"trobis",
    password:"trouble1",
    email:"gobis@snobis.biz"
}];


app.get("/getData", (req,res)=> {
    res.send(db[0].userName);
});

app.post("/sendData", (req, res)=>{
  db.push({username: "Donald Trump"})
  res.send("heyDude")
});

app.get("/crapData", (req, res)=> {
  console.log(db);
  res.send(db);
})

app.delete("/deleteData", (req, res)=>{
  console.log("req.body: " + req.body.userName);
  var matchedIndex = db.findIndex((entry)=>{
    if (entry.userName === req.body.userName){
      return true
    } 
 });
db.splice(matchedIndex, 1) 
console.log(db)


if (typeof matchedIndex === "number"){
     res.json("you successfully deleted email");
 } else {
     res.json("username and password don't match");
 }

})


app.put("/updateData", (req, res)=>{
  
})

app.listen(8080, function() {
    console.log("listening on port 8080")
});


//copy the boilerplate from reqRes.js
//create some fake data (an array of object), set it equal to a const. 

//in reqRes.js we utilized the "post" method instead of the "get"
//These are called different http methods - and your server can use them
//to understand how to handle the request. 

//here's a quick, non-technical rundown of the most common ones
//get - grabs data or file from server. Typically used to read data from a database. Can't send a req.body with it
//post - sends data to server. Think about authenicating a password. CAN send a req.body with it
//delete - sends data to server. Typically used to delete a value in a database. CAN send a req.body with it. 
//put - sends data to server. Typically used to update a value in the database. 

//checkout https://zellwk.com/blog/crud-express-mongodb/ for some ideas about how it works. Don't worry about the database. We're
//mimicking it with the var db.

//feel free to only utilize these three - get will read data, post will update/inject data/ and delete will remove data 

//use all 4 methods to mimic the correct functionality with a database. Your database will be the variable {var}
//USE THE SAME ROUTE FOR ALL OF THEM. It's a common design pattern. 

//Some extra info - You'll use postman to make requests to your server. You'll make a route and a response i.e.
  //app.post("/user", (req. res)=>{ ...
//for each of the 4 cases - creating, reading, updating, and deleting. You'll utilize the proper method for each route handler i.e.
  //app.put vs. app.post vs app.delete....
//If it's still confusing, google search express crud server 
