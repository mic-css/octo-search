var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/app'));

app.listen(8080);
  console.log("App listening on port 8080");

app.get('*', function(req, res){
  res.sendfile('../index.html');
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
