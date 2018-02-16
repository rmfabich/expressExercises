var express = require("express");
var app = express();

app.get("/", (req, res)=> {
    res.sendfile('index.html');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});

//step 1: run "node basicServer.js" in a terminal while being in the 
//expressExercises directory

//open a browser and type in localhost:5000 in the url bar. 
//Hopefully you'll see the index.html in the browser!

//step 2: make some edits to the index.html file. see them reflected in the browser

//step 3: change the number of the first arg passed into app.listen to 
//8080. Restart the server. Go back to the browser. You'll see an error. 
//Change the port number in the url to make it render your index.html file again

//step 4: place a word after the slash in the first arg of app.get. 
//play with the url in the browser to make it work

//step 5: you created a new route in step 4. Create a few more. Change the url
//to get them to render a file. Make a new html file for each route. 

//you guys are routing maestros. This is one of the most important features of 
//web servers