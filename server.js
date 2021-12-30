const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// var mongoUrl = '"mongodb+srv://dbAlex:idk1234@greatwarcluster0.g3qjw.mongodb.net/Data"'
// var mongoose = require('mongoose');

// // updated 2021
// mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
    
// mongoose.connect(mongoUrl, { useUnifiedTopology: true })
// .then(() => { log('Connected to MongoDB: %s \n ', mongoUrl) }) 
// .catch((err) => { error('MongoDB connection error: %s \n', err); })


mongoose.connect('mongodb+srv://dbAlex:idk1234@greatwarcluster0.g3qjw.mongodb.net/test', {
  useUnifiedTopology: true,
  useNewParser: true,
}).then(console.log('Connected to mongo db!'));

app.use(express.static(process.env.PWD + '/www'));

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'www', 'index.html');
  res.sendFile(index);
});

//  Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log("Listening in on PORT 8080")

// removed from package.json underneath e2e
// "heroku-postbuild": "ng build --prod"
