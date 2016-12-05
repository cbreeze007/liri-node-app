var request = require("request");
var fs = require("fs");
var Twitter = require('twitter');

// console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '31gYNcRd3YsRSVK32QpCreaaP',
  consumer_secret: 'c9br8zxDMMaGhdjlxc8bKZCPQeLAUIJxr98KPbjjiZsU92TTzy',
  access_token_key: '31gYNcRd3YsRSVK32QpCreaaP',
  access_token_secret: 'c9br8zxDMMaGhdjlxc8bKZCPQeLAUIJxr98KPbjjiZsU92TTzy'
}
 
// // Get twitter handle from API user request
// var handle = apitite.param('handle');

// // Make call to Twitter API to get user's timeline
// exports.get('statuses/user_timeline', {screen_name: handle}, function(error, tweets, response){
//   if (!error) {
//     apitite.done(tweets); // return the tweets to the API user
//   } else {
//    console.error('An error occurred!'); //error handling
//   }
// });