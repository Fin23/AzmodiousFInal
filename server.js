const express = require('express');
var fs = require('fs');
var http = require('http')
const path = require('path');

// create new express app and save it as "app"
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'))
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
