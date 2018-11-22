// require('dotenv').config();
// const Snoowrap = require('snoowrap');
// const Snoostorm = require('snoostorm');

// const r = new Snoowrap({
//   userAgent: 'reddit-bot-example-node',
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   username: process.env.REDDIT_USER,
//   password: process.env.REDDIT_PASS
// });

// const client = new Snoostorm(r);
// const streamOpts = {
//   subreddit: 'malaysia',
//   results: 25
// };


// // Create a Snoostorm CommentStream with the specified options
// const comments = client.CommentStream(streamOpts);

// // On comment, perform whatever logic you want to do
// comments.on('comment', (comment) => {
//     console.log(comment);
// });

// r.getHot().map(post => post.title).then(console.log);
// r.getSubreddit('malaysia').map(post => post.title).then(console.log);

const AWS = require('node-localstack')()
const s3 = new AWS.S3({'endpoint': 'http://localhost:4572'})
const s3Bucket = "news.search"

var r = require("nraw");
var Reddit = new r("Testbot v0.0.1 by Mobilpadde");
var subreddit = "singapore"
var fs = require('fs');
var uuidv1 = require('uuid/v1');



// Reddit.subreddit(subreddit).comments().top().limit(42).exec(function(data){
//   console.log(data.data.children)
// })




// Reddit.subreddit(subreddit).post('9fob8f').comments().exec(function(data){
//   console.log(data)
// })

// Reddit.search("cat").exec(function(data){
    
// })

// Reddit.subreddit(subreddit).limit(20).exec(function(data){

//   data.data.children.forEach((data)=>{
//     console.log(data)
//   })
//   // fs.writeFile(`./r/${uuidv1()}.json`, JSON.stringify( data ), function (err) {
//   //   if (err) throw err;
//   //   console.log('Replaced!');
//   // });

//     // data.data.children.forEach(redit => {
//     //     fs.writeFile(`./redit/${uuidv1()}.json`, JSON.stringify( redit ), function (err) {
//     //         if (err) throw err;
//     //         console.log('Saved!');
//     //     });
//     // })


//     //   var param = {
//     //     Bucket: s3Bucket,
//     //     Body : JSON.stringify( data.data.children ),
//     //     Key : `reddit/reddit.json`
//     //   };
//     //   s3.upload(param, function (err, data) {
//     //       if (err) {
//     //           console.log("Error", err);
//     //       }
//     //       if (data) {
//     //           console.log("Uploaded in:", data.Location);
//     //       }
//     //   });
//     // data.data.children.forEach((reddit)=>{
//     //   console.log(reddit)
//     // })


// })

// // Reddit.subreddit(subreddit).controversial().after("t3_2k0r3o").exec(function(data){
// //  console.log(data)
// // })

// // Reddit.subreddit(subreddit).comments().top().limit(42).exec(function(data){
// //   console.log(data.children)
// // })

// Reddit.subreddit(subreddit).exec(function(data){
//   data.data.children.forEach((d)=>{
//     console.log(d.data.id)
//   })
// })


// Reddit.subreddit("Singapore").search("SMRT").exec(function(data){
//       data.data.children.forEach(redit => {
//         console.log(redit.data)
//         fs.writeFile(`./dataset.json`, JSON.stringify( redit.data ), function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//         });
//     })
// })


Reddit.subreddit("Singapore").search(['F1']).exec(function(data){
  data.data.children.forEach(redit => {
    fs.writeFile(`./dataset02.json`, JSON.stringify( redit ), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
})
})