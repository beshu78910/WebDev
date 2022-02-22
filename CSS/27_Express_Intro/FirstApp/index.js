const express = require('express');
// Execute express()
const app = express();

// When we try to access that port (localhost:3000) in the browser
// we are sending a request
// Anytime that the localhost recive have an incoming request
// this call back will run
// On every incoming reques express will make for us
// two different parameter in app.use (request, respone)
// These are automatically passed in.
// app.use((req, res) => {
//     console.log("We got a new Request!!");

//     // Respone back to the request
//     res.send({ color: 'red' });
// })

// This specificly the request https to be /cats and match that with
// req parameter (the code only run when their is a matching request)
// for example localhost:3000/cats
// These only respone to get request
app.get('/cats', (req, res) => {
    console.log("We Got a New Request!!");
    res.send('<h1>This is my webpage!</h1>')
})

app.get('/dogs', (req, res) => {
    console.log("Woof");
    res.send('<h1>This is my webpage!</h1>')
})

//root rout
app.get('/', (req, res) => {
    res.send('This is the home page');
})
//These respone to post request
app.post('/cats', (req, res) => {
    res.send('Post Request to /cats');
})



//Set Up a Port 3000 at localhost (locally on our machine)
// and start listening for request
// localhost:3000
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})

app.get('/r/:subreddit', (req, res) => {
    res.send("This is a subreddit");
})

// Declaring some pattern :subreddit (this is a simple variable)
// This does not only match /r/subreddit but also
// anything that follow this pattern.
// if we have something like /r/subreddit/dogs (this won't match)
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    res.send('This is the home page!');
})
// express added a property for us to the request object (req), it makes
// a whole object for us and that property is called params.
// everytime we sent request the property will be added in that object
// if we send request for (localhost:3000/r/cats), (localhost:3000/r/dogs)
app.set('view engine', 'ejs');

app.get('/search', (req, res) => {
    // Assuming there is a request called q
    // to acceess that we use req.query
    // defracturing
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEND')
    }
    console.log(q);
    res.send(`<h1>Search results for: ${q}</h1>`);
})
console.log('test');