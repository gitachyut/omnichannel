const Twit = require('twit')
const T = new Twit({
  consumer_key:         '3OCzuGPSpjfhKYcEcyxj6nbJ2',
  consumer_secret:      'imsABOF0DUMT4VDo1GFgY332sq5R6AJ5vFb7VujMpgA1ejM3AY',
  access_token:         '1032587864725495808-jVXqVuEvxDTXAVR4zNzy8eaYTw1V8Z',
  access_token_secret:  'nZfAeqYz09PTI6wxmNRQwEu0tOv2079VyDizlZKesHamK',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

function twitter(req,res, params = { 
  q: 'Malaysia Shipbuilding Industry  since:2011-07-11', 
  count: 100 
}){

  T.get('search/tweets', params, function(err, data, response) {
    res.json(data)
  })


}

module.exports = twitter