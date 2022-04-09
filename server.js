const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// (2/16/22): Use javascript (or Angular, however, it might take longer) to have a submit button where
// the user will go to if logined in or signed-up successfully
// var bodyParser = require("body-parser");

const app = express();

// From the SignUp Form with HTML, Node JS, MongoDB
// app.use(bodyParser.json());
// app.use(express.static('src/app/signup'));
// app.use(bodyParser.urlencoded({
//     extended:true
// }));

// Connects to MongoDB Database
// mongoose.connect('mongodb+srv://dbAlex:idk1234@greatwarcluster0.g3qjw.mongodb.net/Data', {
//   // Missing 'config' in Compass
//   // Check out: Discord bot regarding 'node .'
//   useUnifiedTopology: true,
//   // useNewParser: true,
//   useNewURLParser: true,
// });

// var db = mongoose.connection;

// db.on('error',()=>console.log("Error in Connecting to Database"));
// db.once('open',()=>console.log("Connected to Database"));

app.use(express.static(process.env.PWD + '/www'));

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'www', 'index.html');
  res.sendFile(index);
});

// Used to connect to 'app.use' above (1/14/22)
// .then(console.log('Connected to mongo db!'));


// app.post("/sign_up",(req,res)=>{
//   var name = req.body.name;
//   var email = req.body.email;
//   var password = req.body.password;

//   var data = {
//       "name": name,
//       "email" : email,
//       "password" : password
//   }

//   db.collection('users').insertOne(data,(err,collection)=>{
//       if(err){
//           throw err;
//       }
//       console.log("Record Inserted Successfully");
//   });

//   return res.redirect('success.page.html')

// })


// app.get("/",(req,res)=>{
//   res.set({
//       "Allow-access-Allow-Origin": '*'
//   })
//   return res.redirect('index.html');
//   // res.send("Hello From the Other Side");
// }).listen(8080);

//  Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
// console.log("Listening in on PORT 8080");

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
// removed from package.json underneath e2e
// "heroku-postbuild": "ng build --prod"
