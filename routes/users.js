var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'm7uenB2SwkFgfUx5NIocBhmmc',
  consumer_secret: 'dO1JdkO8mPf3WDx05utJnBXXLXx75c7ive6X2yDgrwAlErYlbA',
  access_token_key: '972862856298467328-4b1GaIZa8wbcitVGsFGyWTG4GEela9A',
  access_token_secret: '7qcGLlUrKxLW3ooUZpQtqLUhrzx6OYp6SQNPaPiPUMqPh'
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  client.post('statuses/update', {status: req.body.dataA},  function(error, tweet, response) {
    if(error) throw error;
  });

  console.log(req.body.dataA);
  res.send('responded with a resource');
});

module.exports = router;
