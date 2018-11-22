const Twit = require('twit')
var fs = require('fs');
const T = new Twit({
  consumer_key:         'Ma7BGWP8UEs6UzCQCZcbeSM0v',
  consumer_secret:      'u1OMZeXOELqrd2db05W8RpTmEe2oS2Jwu0Dd6xjpXmCe5hk3rH',
  access_token:         '1032587864725495808-B52L1BcmovIyrm330whmijeHwkE9Ld',
  access_token_secret:  'RcVnHdo5z1cLeTYYHmDnE16wbjMFpRqcpP6BYvoy0rno9',
  timeout_ms:            60*1000,
  strictSSL:             true,
})



// var params = { 
//   q: 'Malaysia  since:2018-08-24', 
//   count: 100 
// }

// var params = {
//   q: '#nodejs, #Nodejs',  
//   lang: 'en'
// }




// var params = { track: ['#india'] }
// T.get('statuses/filter', params, function(error, tweets, response) {
//   console.log(tweets)
//   fs.writeFile(`./test/${uuidv1()}.json`, JSON.stringify( tweets ), function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });
// });


// T.get('statuses/home_timeline', { screen_name: ['staronline','achyutdeka'], count: 100 }, function(err, data, response) {
//   data.forEach((d)=>{
//     console.log(d)
//   })
// })


// T.get('statuses/home_timeline', { screen_name: screen_name , count: 100 }, function(err, data, response) {
//           console.log(data)
//           data.forEach((tweet)=>{
//               console.log(tweet)
//             var fname = sha1(tweet.id)
//             var params = {
//                 Bucket: config.s3.bucket, 
//                 Key: `twitter/${fname}.json`, 
//                 Body: JSON.stringify(tweet)
//             };
//             s3.upload(params, function(s3Err, data) {
//                 console.log(s3Err)
//             });
//         })
// })

// var stream = T.stream('statuses/filter', { track: ['#MalaysiaDay','#Singapore','#staronline'], tweet_mode: 'extended' })
// stream.on('tweet', function (tweet) {
//     console.log(tweet)
// })

// const screen_name = [
//     'ChannelNewsAsia',
//     'hardwarezone',
//     'STcom',
//     'TODAYonline',
//     'TREMeritus'
// ]


// T.get('statuses/user_timeline', { screen_name:  '' , count: 100 }, 
//     function(err, data, response) {
//           fs.writeFile(`./${uuidv1()}.json`, JSON.stringify( data ), function (err) {
            
//           });
//     }
// )


// var track = ['#MalaysiaDay','#Singapore','#staronline','#AsiaCup2018','#SingHealth']
// var stream = T.stream('statuses/filter', { track: track })
// stream.on('tweet', function (tweet) {
    
// })


// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 200 }, function(err, data, response) {
//     console.log(data)
//   })

// var params = { 
//   q: 
//   count: 100 
// }

// T.get('search/tweets', { q: 'Singapore Transport', count: 200 }, function(err, data, response) {

//     fs.writeFile(`./output.json`, JSON.stringify( data), function (err) {
//                 console.log('done')
//     });
    
//     // data.statuses.forEach(tweet => {
//     //     i = 0
//     //     fs.writeFile(`./output.json`, JSON.stringify( tweet ), function (err) {
//     //         i++
//     //         console.log(i)
//     //     });
//     // });

//   })



var stream = T.stream('statuses/filter', { track: ['#Aviation','#CAAS','#ChangiAirport','#IATA','#ICAO','#Airport',
  '#Airline', '#Aircraft', '#Drone', '#SIA', '#Scoot','#SilkAir','#Runway','#Terminal','#Airfare','#Fuel'
], tweet_mode: 'extended' })
stream.on('tweet', function (tweet) {
    console.log(tweet)
})

