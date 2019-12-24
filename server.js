
// //server/server.js
// var express = require('express');
// var router = require('./server/routes');
// var app = express();
// var React = require('react');
// var ReactDOM = require('react-dom');
// var mongoose = require('mongoose');


// const MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost/mongoscrap";
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("Connected to Mongoose!");
// });


// app.use("/", router);

// //Create localhost port
// var port = process.env.PORT || 3000;

// app.listen(port, function() {
//   console.log("Listening on PORT " + port);
// });
// module.exports=app;


//dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var path = require('path');

//initialize Express app
var express = require("express");
var app = express();

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static(path.join(__dirname, 'client/build')));
//connecting to MongoDB
//mongoose.connect("mongodb://localhost/scraped_news");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoscrap";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});


//Create localhost port
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});














