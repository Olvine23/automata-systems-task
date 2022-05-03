 
const fetch = require('node-fetch');
var express = require('express');
var app = express();
 
 
// set the view engine to ejs
app.set('view engine', 'ejs');



// use res.render to load up an ejs view file

// index page
 

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/',async function(req, res){
  const url_api = 'https://techy-api.vercel.app/api/json'
  try {
    await fetch(url_api).then(res => data = res.json())
  .then(
    data => {
      res.render('pages/index',{
        text:data.message
      })

    }
  )
    
  } catch (error) {
    
  }
  
  
})

app.get('/memes', async  function (req, res){
  const meme_url = "https://api.imgflip.com/get_memes"
  await fetch(meme_url)
  .then(res => f_data = res.json())
  .then(f_data => {
    console.log(f_data.data.memes[7])
    res.render('pages/memes', {
      meme_img:f_data.data.memes[7].url
    })
    
  })
  
})

app.listen(8080);
console.log('Server is listening on  http://localhost:8080');