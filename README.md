# liri-node-app

## Description
LIRI is comparable to iPhone's SIRI. While SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. In this project,  LIRI will be a command line node app that takes in parameters and gives you back data. 

LIRI searches Bands in Town for concerts, Spotify for songs, and OMDB for movies.

## Challenge
Using Node JS to create a LIRI bot and taking in commands through Language vs Speech using the following commands:
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

## Technologies Used
* Javascript
* Node.js
* APIs: 
    * Spotify (https://developer.spotify.com/)
    * OMDB (http://www.omdbapi.com)
    * Bands In Town (http://www.artists.bandsintown.com/bandsintown-api)
* NPM packages
    * Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)
    * Axios (https://www.npmjs.com/package/axios)
    * Moment (https://www.npmjs.com/package/moment)
    * DotEnv (https://www.npmjs.com/package/dotenv)

## Instructions
1. Bands in Town
    * node liri.js concert-this '<artist/band name here>'
    * This command line input will render the information and give the name of the venue, venue location, and date of event (using the format "MM/DD/YYYY").
    * Screenshot:
    ![image](https://user-images.githubusercontent.com/52515674/66104043-477b4380-e56c-11e9-8942-b365803f6610.png)

2. Spotify
    * node liri.js spotify-this-song '<song name here>'
    * This command line input will render the information and give the song's name, the artist, a preview link of the song from spotify, and the album containing the song. If no song is provided, the program defaults to "The Sign" by Ace of Base.
    * Screenshot:
    ![image](https://user-images.githubusercontent.com/52515674/66103973-1d298600-e56c-11e9-8753-63a2e6e486a4.png)
3. OMDB
    * node liri.js movie-this '<movie name here>'
    * This command line input will render the information and provide the:
        * Title
        * Year movie was released
        * IMDB Rating
        * Rotten Tomatoes Rating
        * Country where movie was produced
        * Language(s)
        * Plot of the movie
        * Actors in the movie
    If the user does not enter a movie selection, the program outputs data for the movie 'Mr. Nobody.'
    * Screenshot:
    ![image](https://user-images.githubusercontent.com/52515674/66104257-d8521f00-e56c-11e9-8fb2-c35deedb546f.png)
4. Do what it says
    * node liri.js do-what-it-says
    * Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    * Screenshot: 
    ![image](https://user-images.githubusercontent.com/52515674/66104535-b907c180-e56d-11e9-9626-7afd5f86fc8f.png)


## Authors: 
Turan Ketene
