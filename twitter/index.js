const Twit = require('twit')
// const AWS = require('node-localstack')()
// const s3 = new AWS.S3({'endpoint': 'http://localhost:4572'})
// const s3Bucket = "news.search"
const T = new Twit({
    consumer_key:         'Ma7BGWP8UEs6UzCQCZcbeSM0v',
    consumer_secret:      'u1OMZeXOELqrd2db05W8RpTmEe2oS2Jwu0Dd6xjpXmCe5hk3rH',
    access_token:         '1032587864725495808-B52L1BcmovIyrm330whmijeHwkE9Ld',
    access_token_secret:  'RcVnHdo5z1cLeTYYHmDnE16wbjMFpRqcpP6BYvoy0rno9',
    timeout_ms:            60*1000,
    strictSSL:             true,
  })
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// var fs = require('fs');
// const uuidv1 = require('uuid/v1');
// var params = { 
//   q: 'Malaysia  since:2018-08-24', 
//   count: 100 
// }

// var params = {
//   q: '#nodejs, #Nodejs',  
//   lang: 'en'
// }

const uuidv1 = require('uuid/v1');
// var params = { track: ['#india'] };
// var stream = T.stream('statuses/filter', { track: ['#india'] })
// T.get('favorites/list', params, function(error, tweets, response) {

//   fs.writeFile(`./t/${uuidv1()}.json`, JSON.stringify( tweets ), function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });
//   // tweets.forEach((tweet)=>{
//   //   console.log(tweet)
//   //   // T.post('statuses/retweet/:id', { id: '1040174012934938629' }, function (err, data, response) {
//   //   //   console.log(data)
//   //   // })
    
//   // })
// });




// if (!error) {
//   console.log(tweets);
//   tweets.forEach(tweet => {
//     fs.writeFile(`./staronline/${uuidv1()}.json`, JSON.stringify( tweet ), function (err) {
//       if (err) throw err;
//       console.log('Replaced!');
//     });
//   });
//   var param = {
//       Bucket: s3Bucket,
//       Body : JSON.stringify( tweets ),
//       Key : `twitter/twit.json`
//   };
//   s3.upload(param, function (err, data) {
//       if (err) {
//           console.log("Error", err);
//       }
//       if (data) {
//           console.log("Uploaded in:", data.Location);
//       }
//   });
// }
// var stringify = require('csv-stringify')
// var data = []
// var columns = {
//     id: 'id',
//     text: 'text'
//   };
  
// var stream = T.stream('statuses/filter', { track: ['#singapore'], tweet_mode: 'extended', lang: 'en'  })
// stream.on('tweet', function (tweet) {
//     if(tweet.extended_tweet){

//         data.push([
//             tweet.id,
//             tweet.extended_tweet.full_text,
//         ]);

//     }else{
        
//         data.push([
//             tweet.id,
//             tweet.text,
//         ]);
//     }
    
//     if(data.length > 2){
//         stringify(data, { header: true, columns: columns }, (err, output) => {
//             if (err) throw err;
//             fs.writeFile('my02.csv', output, (err) => {
//               if (err) throw err;
//               console.log('my.csv saved.');
//             });
//           });
//     }
// })




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

var maxId = null
var q = null
setInterval(()=>{
    if(maxId){
        q =  `jewel changi max_id:${maxId}`
    }else{
        q =  `jewel changi`
    }

    T.get('search/tweets', { q: q , count: 200  }, function(err, data, response) {
        // var searchInfo = data.search_metadata.next_results
        // console.log(searchInfo)
        // maxId = searchInfo.split('=')[1].split('&q')[0]
        console.log(data)
    })
},3000)



