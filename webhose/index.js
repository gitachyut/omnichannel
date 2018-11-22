const webhoseio = require('webhoseio')
const client = webhoseio.config({token: '6e99f363-f3ff-4b3a-9295-42a114e26057'})
// // const s3 = new AWS.S3({'endpoint': 'http://localhost:4572'})
// const s3Bucket = "news.search"
// const params ={
//     "site":"focustaiwan.tw",
//     "site":"marketing-interactive.com"
// }
// client.query('filterWebContent', params)
//     .then(output => {
//        console.log(output)
// }).catch(err => console.log(err));
    

// const client = webhoseio.config({token: 'YOUR_API_KEY'});
let r = client.query('filterWebContent', {
    "site": "marketing-interactive.com",
    "site": "focustaiwan.tw"
});

setInterval(() => {
  r.then(output => {
    output['posts'].map(post => console.log(post.uuid));
    return client.getNext();
  });
}, 2000);