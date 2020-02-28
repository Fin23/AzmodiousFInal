const express = require("express");
var fs = require("fs");
var http = require("http");
const path = require("path");
const request = require("request");
const fetch = require("node-fetch");
const mongoose = require('mongoose');
// create new express app and save it as "app"
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("assets"));
//========== MONGO ===============

const MONGODB_URI = 'mongodb+srv://Fin23:WaffleBerry=2342@records-7orx3.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});
mongoose.connection.on('connected',() => {
  console.log('Welcome to the Library');
});

//Schema ================
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
  title: String,
  body: String,
  date:{
    type: String,
    default: Date.now()
  }
});
//============== end ===================
//MODEL==========================
// how we create insert data 
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);


//============= end =====================

//====Saving data to our mongo atlas db

const data ={
  title:'Welcome to the records',
  body: 'Creating a large data base for dnd ease of use'
};


//instance of the model
const newBlogPost = new BlogPost(data);


// newBlogPost.save((error) => {
//   if(error){
//     console.log('Oops error')

//   }else{
//     console.log('Data Saved to Records');
//   }
// });
//.save();


//============== end =========================


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Fin23:WaffleBerry=2342@records-7orx3.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("dndDataBase").collection("dndCollection");
//   // perform actions on the collection object
//   client.close();
// });

// ||'mongodb+srv://Fin23:WaffleBerry=2342@records-7orx3.mongodb.net/test?retryWrites=true&w=majority'


//======================================
app.get("/db", function(req, res, next) {
  // res.sendFile(path.join( __dirname + '/assets/index.html'));
 
  BlogPost.find({})
  .then((data) =>{
    console.log('Data: ', data);
    res.json(data)
  })
  .catch((error) => {
    console.log('Data: ', data);
  });

 
  // res.status(200).send(buttData);
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
