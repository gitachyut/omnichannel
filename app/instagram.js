const accessToken = "3687765933.f234b22.06f1cd5f1f804683a8f57858e48b40cc"
const client_id = 'f234b22bea004eff8199f13df9051b84'
const client_secret = 'b3a726e9b0e741ffa7732960b2c41b57'
const Instagram = require('node-instagram').default;
const instagram = new Instagram({
  clientId: client_id,
  clientSecret: client_secret,
  accessToken: accessToken,
});

function insta(req,res,params){
  instagram.get('tags/search', { q: 'anakanakmalaysia' })
  .then(data => {
    res.json(data)
  }).catch(err=> console.log(err));
}

module.exports = insta


