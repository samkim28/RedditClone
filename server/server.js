var express = require('express');
var app = express();
var path = require ('path');
 
//this logs the requests
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
})

//this sets up routes for the other files
app.use('/static', express.static(path.join(__dirname, '/../')));
app.get('/favicon.ico', function(req,res) {
   res.sendFile(path.join(__dirname, '/../bulb.png'))
})

//this sends the index.html for the initial page load 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../index.html'));
})



// app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));

// app.listen(app.get('port'), app.get('host'), function(error) {
//   if(error) console.log('error');
//   console.log(`Server listening @ ${app.get('host')}:${app.get('port')}`);
// });


