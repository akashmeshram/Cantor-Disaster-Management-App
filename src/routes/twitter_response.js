var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

module.exports = (app) => {
  /* GET users listing. */
  app.post('/', function(req, res, next) {
    client.post('statuses/update', {status: req.body.dataA},  function(error, tweet, response) {
      if(error) throw error;
    });
  
    console.log(req.body.dataA);
    res.send('responded with a resource');
  });
}