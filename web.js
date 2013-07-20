var express = require('express');
var fs = require ('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(readFromHTML());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var readFromHTML = function (){

return (fs.readFileSync('./index.html').toString());  
};
