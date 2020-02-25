const express = require("express");
var fs = require("fs");
var http = require("http");
const path = require("path");
const request = require("request");
const fetch = require("node-fetch");
// create new express app and save it as "app"
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("assets"));

app.get("/butt", function(req, res, next) {
  // res.sendFile(path.join( __dirname + '/assets/index.html'));
  let buttData = {
    message: "Hello butt api route!"
  };
  res.status(200).send(buttData);
  // return res.send('Received a GET HTTP (butt) method');
});

app.post("/butt", (req, res) => {
  let data = req.body;
  // query a database and save data
  res.status(200).send(data);
});

app.get("/spells", function(req, res) {
  res.sendFile(path.join(__dirname + "/assets/index.html"));
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});
app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

// server configuration
const PORT = 8080;

// create a route for the app

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Being Servered on PORT : http://localhost:${PORT}/`);
});

module.exports = app;
