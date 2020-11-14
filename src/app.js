var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// If environment provides a port, lets take it
const PORT = process.env.PORT || 8080;
const NODES = 3

initialize();

function initialize() {
  startExpressServer();
}

function startExpressServer() {
  var app = express();

  if (process.env.APP_ENV === 'development') {
    app.use(logger('dev'));
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../public')));

  require('./routes/index')(app);
  require('./routes/users')(app);

  app.get('*', (req, res) => res.status(404).send({ error: 'API not found.' }));

  app.listen(PORT, (error) => {
		if (error) {
			return console.log('something bad happened', error);
		} else {
			console.log(`Server started Listening on ${PORT} ...`);
		}
	});
}
