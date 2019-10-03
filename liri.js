require("dotenv").config();
//Importing the keys file and storing in variable
var keys = require("./keys");
// Requiring the axios, moment, and spotify npm packages
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
// Requiring the "fs" package for the "do-what-it'says" portion
var fs = require("fs");
// linking the spotify keys
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret,
});
// If user does not input movie, print out default
var defaultMovie = "Mr. Nobody";
// Process.argv shortcuts
var action = process.argv[2];
var value = process.argv[3];

switch (action) {
  case "concert-this":
    findBands(value)
    break;
  case "spotify-this-song":
    findSongs(value)
    break;
  case "movie-this":
    if (value == "") {
      value = defaultMovie;
    }
    findMovies(value)
    break;
  case "do-what-it-says":
    doWhatItSays()
    break;
  default:
    break;
}
function findBands(artist) {
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {
      console.log("Name of the venue:", response.data[0].venue.name);
      console.log("Venue location:", response.data[0].venue.city);
      var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
      console.log("Date of the Event:", eventDate);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function findSongs(songName) {
  if (songName === "") {
    songName = "I Saw the Sign";
  }

  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // Song Name
    console.log("Song Name: ", data.tracks.items[0].name)
    //Artist(s)
    console.log("Artists: ", data.tracks.items[0].album.artists[0].name)
    // A preview link of the song from Spotify
    console.log("Preview Link: ", data.tracks.items[0].preview_url)
    // The album that the song is from
    console.log("Album Name: ", data.tracks.items[0].album.name)
  });
}

function findMovies(movieName) {
  axios.get("http://www.omdbapi.com/?apikey=42518777&t=" + movieName)
    .then(function (data) {
      var results = `
      Title of the movie: ${data.data.Title}
      Year the movie came out: ${data.data.Year}
      IMDB Rating of the movie: ${data.data.Rated}
      Rotten Tomatoes Rating of the movie: ${data.data.Ratings[1].Value}
      Country where the movie was produced: ${data.data.Country}
      Language of the movie: ${data.data.Language}
      Plot of the movie: ${data.data.Plot}
      Actors in the movie: ${data.data.Actors}`;
      console.log(results)
    })
    .catch(function (error) {
      console.log(error);
    });
}

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (err, data) {
    data = data.split(",");
    var action = data[0]
    var value = data[1]
    switch (action) {
      case "concert-this":
        getBands(value)
        break;
      case "spotify-this-song":
        getSongs(value)
        break;
      case "movie-this":
        getMovies(value)
        break;
      default:
        break;
    }
  });
}