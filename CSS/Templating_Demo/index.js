const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
// Taking the path that taking to this index.js file
// by using __dirname then join that path with/views
app.set('views', path.join(__dirname,'/views'))

// Inside of app.use we ran somecode, and it will run
// everyime we had any request (does not matter what types of request)
// is it
// express.static is a middleware runs in between the requests
// coming in and the response going out.

app.use(express.static('public'))

app.get('/', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1; 
    // Whenever this code run it will generate an object
    // and that num variable will be available in home.ejs
    // under the name rand. From home we now have access to num as rand.
    res.render('home.ejs', { num })
})

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params.subreddit);
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty'
    ]
    res.render('cats', { cat })
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // What ever num value is will be avalable in the template random.ejs
    // under the name rand
    res.render('random', {rand: num})
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})