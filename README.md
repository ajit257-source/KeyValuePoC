# KeyValuePoC
Run locally
  - clone the repo
  - replace start configuration in package.json with "ng serve --open | nodemon server/"
  - open terminal and from the project dir path run command npm start.
  
Run on the Heroku Cloud
  - install heroku cli
  - clone the git repo
  - push code to heruko cloud (see heroku instructions)
  - create a mogo db cluster on the mongodb/atlas, cloud service for mongo db. (see mongo db instructions)
  - set up connection string in heroku settings/environment variables.
  - open terminal run heroku open to open the app in the browser.

Testing
  - Postman has been used for API testing. 
