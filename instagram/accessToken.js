const express = require('express');
const Instagram = require('node-instagram').default;
const client_id = 'f234b22bea004eff8199f13df9051b84'
const client_secret = 'e557fd2ecc3a42ca879abbfb3a11377c'
// Create a new instance.
const instagram = new Instagram({
  clientId: client_id,
  clientSecret: client_secret,
});


const redirectUri = 'http://localhost:3001/auth/instagram/callback';

// create express server
const app = express();

app.get('/',(req,res)=>{
  res.redirect('/auth/instagram')
})
// Redirect user to instagram oauth
app.get('/auth/instagram', (req, res) => {
  res.redirect(instagram.getAuthorizationUrl(redirectUri, { scope: ['basic','public_content'] }));
});


// Handle auth code and get access_token for user
app.get('/auth/instagram/callback', async (req, res) => {
  try {
    const data = await instagram.authorizeUser(req.query.code, redirectUri);
    // access_token in data.access_token
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

// listen to port 3000
app.listen(3001, () => {
  console.log('app listening on http://localhost:3001');
});