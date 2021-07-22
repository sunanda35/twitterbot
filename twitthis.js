require("dotenv").config();
const Twit = require("twit");

function retweet(isForSunanda) {
  let twitdata;
  if (!isForSunanda) {
    twitdata = new Twit({
      consumer_key: process.env.CENTOCODE_APPLICATION_CONSUMER_KEY_HERE,
      consumer_secret: process.env.CENTOCODE_APPLICATION_CONSUMER_SECRET_HERE,
      access_token: process.env.CENTOCODE_ACCESS_TOKEN_HERE,
      access_token_secret: process.env.CENTOCODE_ACCESS_TOKEN_SECRET_HERE,
    });
  } else {
    twitdata = new Twit({
      consumer_key: process.env.SUNANDA_APPLICATION_CONSUMER_KEY_HERE,
      consumer_secret: process.env.SUNANDA_APPLICATION_CONSUMER_SECRET_HERE,
      access_token: process.env.SUNANDA_ACCESS_TOKEN_HERE,
      access_token_secret: process.env.SUNANDA_ACCESS_TOKEN_SECRET_HERE,
    });
  }

  // start stream and track tweets

  const stream = twitdata.stream("statuses/filter", {
    track: ["#ai", "#technology", "#programming", "#code"],
    language: "en",
  });

  // use this to log errors from requests
  function responseCallback(err, data, response) {
    console.log(err);
  }
  //limit

  // event handler
  stream.on("tweet", (tweet) => {
    // perform some action here

    twitdata.post(
      "statuses/retweet/:id",
      { id: tweet.id_str },
      responseCallback
    );
    // T.post('favorites/create', {id: tweet.id_str}, responseCallback);
  });
}

module.exports = retweet;
