const AWS = require('node-localstack')();
// AWS.config.update({
//     accessKeyId: "AKIAIYWACYMT5STAEZ3A",
//     secretAccessKey: "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"
// });

const s3Bucket = "news.search"
const s3 = new AWS.S3({'endpoint': 'http://localhost:4572'}); 
s3.upload({
  Bucket: s3Bucket,
  Body : "hello World",
  Key : "test.txt"
}, function (err, data) {
  if (err) {
      console.log("Error", err);
  }
  if (data) {
      console.log("Uploaded in:", data.Location);
  }
});