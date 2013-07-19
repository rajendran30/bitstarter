var express = require('express');
var fs = require ('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(readFromHTML(response));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var readFromHTML = function (response){
response.send ('into readFromHTML');
fs.readFile('index.html', 'utf8', function (err,data) {


  if (err) {
    throw err;
  }
    response.send ('into the function');
    response.send('the data is '+data);
  return (data);
});

};
