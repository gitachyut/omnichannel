const webhoseio = require('webhoseio')
const client = webhoseio.config({token: '6e99f363-f3ff-4b3a-9295-42a114e26057'})

function webhose(req,res, params = { 
  "site_type":"news",
  "site":"focustaiwan.tw"}){
  client
    .query('filterWebContent', params)
    .then(output => res.json(output) )
    .catch(err => console.log(err));
}

module.exports = webhose