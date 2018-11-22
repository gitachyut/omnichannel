const Twit = require('twit')
// const AWS = require('node-localstack')()
// const s3 = new AWS.S3({'endpoint': 'http://localhost:4572'})
// const s3Bucket = "news.search"
const T = new Twit({
    consumer_key:         'SkYUIotXvQ483BsFJx0NVo11H',
    consumer_secret:      'gTu24HPFh77pxJ6WktQ6CDrtnUPtTAb4PF1yNiMVeCngygZSzU',
    access_token:         '1032587864725495808-gecxoC1hJ8MZ5YriT0uj1MfII2SPDf',
    access_token_secret:  'WHvkK3LGH2OQ7UxbC8T7LLtgkPj8wm8RVrasCCYaKVVDu',
    timeout_ms:           60*1000,  
    strictSSL:            true,     
  }  )


T.get('statuses/home_timeline', { screen_name: screen_name , count: 100 }, function(err, data, response) {
          console.log(data)
          data.forEach((tweet)=>{
              console.log(tweet)
            var fname = sha1(tweet.id)
            var params = {
                Bucket: config.s3.bucket, 
                Key: `twitter/${fname}.json`, 
                Body: JSON.stringify(tweet)
            };
            s3.upload(params, function(s3Err, data) {
                console.log(s3Err)
            });
        })
})
// var stream = T.stream('statuses/filter', { track: ['#MalaysiaDay','#Singapore','#staronline'], tweet_mode: 'extended' })
// stream.on('tweet', function (tweet) {
//     console.log(tweet)
// })
 