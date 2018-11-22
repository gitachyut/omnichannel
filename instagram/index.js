const accessToken = "3687765933.f234b22.2be4be892958403da2e55a81a9e2aa1a"
const client_id = 'f234b22bea004eff8199f13df9051b84'
const client_secret = 'e557fd2ecc3a42ca879abbfb3a11377c'

const Instagram = require('node-instagram').default;
// Create a new instance.

const instagram = new Instagram({
  clientId: client_id,
  clientSecret: client_secret,
  accessToken: accessToken,
});


// Get a list of users matching the query.
// instagram.get('users/search', { q: 'paris' }).then(data => {
//   console.log(data);
// }).catch((err)=>{
//   console.log(err)
// });


instagram.get('users/self')
.then(data => {
  console.log(data);
})
.catch(err=> console.log(err));



instagram.get('users/self/media/recent')
.then(data => {
  console.log(data);
})
.catch(err=> console.log(err));


// instagram.get('media/Bmvo8oll7bX').then(data => {
//   console.log(data);
// }).catch(err => console.log(err));


// // Get information about current user
// instagram.get('users/self', (err, data) => {
//   console.log(data);
// });

// // Get information about a user.
// instagram.get('users/:user-id').then(data => {
//   console.log(data);
// });

// // Get the most recent media published by the owner of the access_token.
// instagram.get('users/self/media/recent').then(data => {
//   console.log(data);
// });

// // Get the most recent media published by a user.
// instagram.get('users/:user-id/media/recent').then(data => {
//   console.log(data);
// });

// // Get the list of recent media liked by the owner of the access_token.
// instagram.get('users/self/media/liked').then(data => {
//   console.log(data);
// });

// // Get a list of users matching the query.
// instagram.get('users/search', { q: 'paris' }).then(data => {
//   console.log(data);
// });

// // Get information about this media.
// instagram.get('media/:media-id').then(data => {
//   console.log(data);
// });

// // Get a list of users who have liked this media.
// instagram.get('media/:media-id/likes').then(data => {
//   console.log(data);
// });

// // Set a like on this media by the currently authenticated user.
// instagram.post('media/:media-id/likes').then(data => {
//   console.log(data);
// });

// // Remove a like on this media by the currently authenticated user.
// instagram.delete('media/:media-id/likes').then(data => {
//   console.log(data);
// });

// // Get information about a tag object.
// instagram.get('tags/:tag-name').then(data => {
//   console.log(data);
// });

// // Get a list of recently tagged media.
// instagram.get('tags/:tag-name/media/recent').then(data => {
//   console.log(data);
// });

// // Search for tags by name.
// instagram.get('tags/search', { q: 'paris' }).then(data => {
//   console.log(data);
// });








