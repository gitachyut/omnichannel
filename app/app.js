const express = require('express')
const app = new express()
const bodyParser = require('body-parser')
const twitter = require('./twitter')
const insta = require('./instagram')


app.use(express.static('public'))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.set('view engine', 'ejs');

app.get('/dashboard',(req,res)=>{
  res.render('index');
})

app.get('/api/:type',(req,res)=>{
  const type = req.params.type

  switch (type) {
    case "twitter":
      twitter(req,res)
      break;
    case "instagram":
      insta(req,res)
      break;
      
    default:
      break;
  }
  
})

app.listen(9009,()=>{
  console.log('Wow ...9009 is my home');
})