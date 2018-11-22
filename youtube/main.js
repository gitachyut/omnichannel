const {google} = require('googleapis') 
const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyDzST9kzADYL3uTFxbOLeCgy_7wJljfktE'
})

const params = {
  'maxResults': '25',
  'part': 'snippet',
  'q': 'surfing',
  'type': ''
}
const channelName =  'thestaronline'
youtube.search.list(params, function(err, response) {
  if (err) {
    console.log('The API returned an error: ' + err);
    return;
  }
  console.log(response.data);
});


// var params = {
//   part: 'snippet,contentDetails,statistics',
//   'id': 'UC_x5XG1OV2P6uZZ5FSM9Ttw'
// }



youtube.channels.list({
  part: 'snippet,contentDetails,statistics',
  forUsername:channelName
},function(err, response) {
  if (err) {
    console.log('The API returned an error: ' + err);
    return;
  }
  console.log(response.data);
  youtube.playlists.list({
    'channelId': 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
    'maxResults': '25',
    'part': 'snippet,contentDetails,statistics'
  },function(err, response) {
    console.log(response.data);
  })
});


