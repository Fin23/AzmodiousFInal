const express = require('express');
var fs = require('fs');
var http = require('http')
const path = require('path');
const request = require('request');
const fetch = require("node-fetch");
// create new express app and save it as "app"
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',express.static('assets'))





app.get('/butt', function(req, res,next)  {
  // res.sendFile(path.join( __dirname + '/assets/index.html'));
  let buttData = {
    message: 'Hello butt api route!'
};
res.status(200).send(buttData);
// return res.send('Received a GET HTTP (butt) method');
});


app.post('/butt', (req, res) => {
  let data = req.body;
  // query a database and save data
  res.status(200).send(data);
});


app.get('/', function(req, res)  {
  res.sendFile(path.join( __dirname + '/assets/index.html'));
  request(`http://www.dnd5eapi.co/api/spells/`, { json: true }, (err, res, body) => {
  if (err) { 
    return console.log(err); 
  }
  // console.log("Body: ",body.results[0]);
  console.log("==========================  Spell Search Terms  ==============================");
for(i in body.results){
  spellSearchTerm = body.results[i];
  console.log(spellSearchTerm.index)
  // document.getElementById('spellList').innerHTML = spellSearchTerm.index;
}
});
 
// return res.send('Received a GET HTTP (butt) method');


let spells = "mending";

request(`http://www.dnd5eapi.co/api/spells/${spells}`, { json: true }, (err, res, body) => {
  if (err) { 
    return console.log(err); 
  }
  let Index = body.index;
  console.log("Index: ",Index);
  let Name = body.name;
  console.log("Name: ",Name);
  let Page = body.name;
  console.log("Page: ",Page);
  let Level = body.level
  console.log("Level: ",Level);
  let Material = body.material
  console.log("Material Needed: ",Material);
  let CastingTime = body.casting_time;
  console.log("Casting Time: ",CastingTime);
let Duration = body.duration;
  console.log("Spell Duration: ",Duration);
let Concentration = body.concentration;
  console.log("Concentration: ",Concentration);
let Range = body.range;
  console.log("Spell Range: ",Range);
let Description = body.desc;
  console.log("Description: ",Description);
let HigherLevel = body.higher_level;
  console.log("Higher Level Bonus: ",HigherLevel);

  console.log("Class: ",body.classes[0].name);
  //  request(`http://www.dnd5eapi.co/api/spells/${spells}`).pipe(fs.createWriteStream('test.json'))
  for(i in body.classes){
    allClasses = body.classes[i];
    console.log("All Classes: ",allClasses.name)
  }
 // console.log(body.);
//  function jJson(Index, Name, Page, Level,){
//   fs.createWriteStream('test.json')
//  }

console.log('========================= end of 1st request ==========================')


 
}) .pipe(fs.createWriteStream('test.json'));



});



app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});



// console.log('========================== about to fetch============================')
// fetch('http://www.dnd5eapi.co/api/spells/aid').then(response =>{
//   console.log('=============== response ============');
//   console.log(response);
//   console.log('=============== end of response ============');
// });
// {
//   console.log('Fetch =============================')
// }
//==================================================================





//==================================================================

// server configuration
const PORT = 8080;

// create a route for the app

// Routes
// =============================================================
//require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);
// require("./app/routes/api-routes.js")(app);


// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Being Servered on PORT : http://localhost:${PORT}/`);
});


module.exports = app;