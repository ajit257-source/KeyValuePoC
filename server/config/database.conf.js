// database.conf.js

/*Its assumed that you have already created a mongodb atlas cluster
in previous exercise, Therefore, use the cluster credentials
(username and password for mongodb atlas cluster) for this exercise */

// Load mongoose module
//----- Include the required Packages
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


// Declare a variable named uri and assign MongoDB connection string
const uri = "mongodb://localhost:27017/local"; //This will be provided externally
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 1000
};
mongoose.Promise = global.Promise;
//------ DB connection
mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

