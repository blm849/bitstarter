var express = require('express');
var app = express.createServer(express.logger());

var fs = require("fs"); 

app.get('/', function(request, response) {
   var temp = fs.readFileSync('index.html', 'utf8');
   response.send(temp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
