//----- Include the required Packages
const express = require('express');
const environment = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');
const keyValueRoutes = require('../routes/keyValueRoutes');
const errorHandler = require('../middlewares/errorHandler');

environment.config(); // read config from .env file
const port = process.env.PORT || 7000;
//----- Declare Constant
var app = express();
app.timeout=240000;
app.listen(port, function(){
  console.log('Listening on port ', port);
});

 // Enable CORS from client-side
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

//----- Update settings and permission to service server
app.use(bodyParser.urlencoded({limit: "50mb", extended: true,parameterLimit: 1000000 }));
app.use(bodyParser.json({ limit: "50mb", type: '*/*' }));

// Create link to Angular build directory
var distDir = __dirname + "/build";
app.use(express.static(distDir));

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});

 app.use('/api/', keyValueRoutes);

 app.use(errorHandler);
//API EndPoints
// app.route('/')
//   .get(function (req, res) {
//       res.send("Wecome to App !");
// });

app.route('/api')
  .get(function (req, res) {
      res.status(404).send("PAGE NOT FOUND")
});

module.exports = app;
