//copy and paste the boilerplate from a previous file. 

//using the openWeather API, grab some data from it and serve it through some routes and handlers. 
//Use postman to grab and view the data. 

//This is what a proxy server is - a server that acts as a middleman - in this case it is between openWeather and a client.
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var axios = require ("axios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function apiPull(req, res, next){
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=bozeman&APPID=df763ac8b1b29ebbbf6e5d41aa8d44eb").then((response)=> {    
        res.locals.temp = Math.floor(response.data.main.temp * (9/5) - 459.67);
        next();
    }) 
}

app.get("/getWeather", apiPull, (req, res)=>{
    console.log(res.locals.temp)
        res.json(`The temperature is currently ${res.locals.temp}`);
})

app.listen(8080, function() {
    console.log("listening on port 8080");
});
