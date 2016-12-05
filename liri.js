var fs = require("fs");
var Twitter = require('twitter');
var spotify = require('spotify');

//var Twitter = require('twitter-js-client').Twitter;

var keys = require('./keys');
var tConsumerKey = keys.twitterKeys.consumer_key;
var tConsumerSecret = keys.twitterKeys.consumer_secret;
var tAccessTokenKey = keys.twitterKeys.access_token_key;
var tAccessTokenSecret = keys.twitterKeys.access_token_secret;
   

// var client = new Twitter({
//         "consumerKey": tConsumerKey,
//         "consumerSecret": tConsumerSecret,
//         "accessToken": tAccessTokenKey,
//         "accessTokenSecret": tAccessTokenSecret
       
//     });

var client = new Twitter({
 consumer_key: 'vWtXNRG43u5KIBcXo6O6EMkvB',
  consumer_secret: 'xBsyPzpdR4y5eb4h9MpXCC9by4297xI9SguGPmQI6w7wyqA3vA',
  access_token_key: 'hJXLzy0G593Pl1wPPmkwl816GGGKc9Q',
  access_token_secret: '4fFpQNN4OWG6KRNELFtIH6UKJOmouOl6vPFezu45RcYHA'
});
 //var twitter = new Twitter(client);


//console.log(keys.twitterKeys);
console.log(keys.twitterKeys.consumer_key);


var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets + response);
//   }
//   else{ console.log(error)}
// });


 // twitter.getTweet({ id: 'kettlechip'}, error, );

var song = "";
fs.readFile("random.txt", "utf8", function(err,data){
	if(err){
		return console.log(err);
	}
	var splitData = (data.split(","))
	for(i=0; i< splitData.length; i++){
	console.log(i);	
	var song = splitData[i];


	console.log("The Data is : " + data);
	console.log("The song is : " + song);
}
	console.log("song now is " + song); 
	return song;

});


spotify.search({ type: 'track', query: 'My Love Took Me Down To The River To Silence Me' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    //console.log("Spotify returned : " + data)
    //console.log(JSON.stringify(data, null,2)); 
    var songData = JSON.stringify(data, null,2);
    var albumWebSite = songData.items.album.href;
    // var name = songData.name;
    //console.log( songData );
    console.log(albumWebSite);
});

