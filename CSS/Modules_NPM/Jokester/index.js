// Create a link to the package
const jokes = require("give-me-a-joke");
const colors = require("colors");
// use method on the npm package 
jokes.getRandomDadJoke(function (joke){
    console.log(joke.rainbow);
});