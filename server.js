
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var app = express();

var user = process.env.USER;
var pass = process.env.PASS;

app.set('port', process.env.PORT || 3000);

if (user && pass) {
  app.use(express.basicAuth(user, pass));
}

app.use(morgan('dev'));
app.use(compression({ filter: shouldCompress }));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), err => {
  if (err) throw err
  console.log('Server on http://localhost:%s', app.get('port'))
});

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

module.exports = app;
