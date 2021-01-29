require("dotenv").config();
const Twit = require('twit');

function retweet(){

const T = new Twit({
  consumer_key: process.env.APPLICATION_CONSUMER_KEY_HERE,
  consumer_secret: process.env.APPLICATION_CONSUMER_SECRET_HERE,
  access_token: process.env.ACCESS_TOKEN_HERE,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET_HERE
});

// start stream and track tweets
const stream = T.stream('statuses/filter', {track: ['#ai','#javascript','#python', '#programming','#code'], language: 'en'});

// use this to log errors from requests
function responseCallback (err, data, response) {
    console.log(err);
    
   }

// event handler
stream.on('tweet', tweet => {
// perform some action here

T.post('statuses/retweet/:id', {id: tweet.id_str}, responseCallback);
T.post('favorites/create', {id: tweet.id_str}, responseCallback);
});
}
setInterval(retweet, 10000);