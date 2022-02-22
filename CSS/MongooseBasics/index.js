// Connect mongo with js using mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err)
    })
// Part 1: Creating a schema
// We are taking data from mongo which has different types that
// JavaScript may or maynot have, by creating a schema which 
// specify which type of data each variables in mongo are when it make back to 
// javascript.
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})
// Part 2: creating a model and an instance of that model
// passed in a string containing the name of our model
// and the schema object
// mongoose take this and create a collection called movies 'movies'
const Movie = mongoose.model('Movie', movieSchema) // movdel class called movie
// create a new instance of Movie
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: "R" });

// if we called insert many we are basically insert direct line into Mongo
// and insert all of these at once, don't need to called save()
Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {

        console.log(data);
    })
// within node
    > Movie.find({rating: 'PG-13'}).then(data => console.log(data))
    Promise {
      <pending>,
      [Symbol(async_id_symbol)]: 949,
      [Symbol(trigger_async_id_symbol)]: 947,
      [Symbol(destroyed)]: { destroyed: false }
    }
    > [
      {
        _id: 6213ca377208cc21e8bc5e5b,
        title: 'Moonrise Kingdom',
        year: 2012,
        score: 7.3,
        rating: 'PG-13',
        __v: 0
      },
      {
        _id: 6213cd43a3104a3a3c5b3824,
        title: 'Moonrise Kingdom',
        year: 2012,
        score: 7.3,
        rating: 'PG-13',
        __v: 0
      }
    
// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


// const movieSchema = new mongoose.Schema({
//     title: String,
//     year: Number,
//     score: Number,
//     rating: String
// });

// const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });


// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })






