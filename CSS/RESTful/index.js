const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }))
// parsing a json data
app.use(express.json());
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'oke dai ca'
    },
    {
        id: uuid(),
        username: 'jaycx',
        comment: 'oke dai ca'
    },
    {
        id:uuid(),
        username: 'nam',
        comment: 'oke dai ca'
    },
    {
        id: uuid(),
        username: 'duy',
        comment: 'oke dai ca'
    },
]
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment });
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    // array method find to the correct id
    // from the array
    // we need to convert the array from /comments/:id
    // to Int (because it has String value)
    const comment = comments.find(c => c.id === id);
   res.render('comments/show', {comment})
})

app.patch('/comments/:id', (req, res) => {
    // Patch also send data to body
    // so we can have access to req.body
  //taking id from the url 
    const { id } = req.params;
    // taking the now body was sent
    const newCommentText = req.body.comment;
    // find the comment to update
    const foundComment = comments.find(c => c.id === id);
    // Updating the old one with the new one
    foundComment.comment = newCommentText;
    // redirect
    res.redirect('/comments')
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})
app.post('/comments', (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const { username, comment } = req.body;
    // push the content to the array
    comments.push({username, comment, id:uuid() })
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    // filter everything beside that array and put it in a new array
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments');
})

// app.get('/tacos', (req, res) => {
//     res.send("GET /tacos response")
// })
// app.post('/tacos', (req, res) => {
//     res.send("POST /tacos response")
// })
app.listen(3000, () => {
    console.log("ON PORT 3000!");
})

// GET /comments - list all comments
// POST /comments - Create a new comments
// GET /comments /: id - Get one comment(using ID)
// PATCH /comments /: id - Update one comment 
// DELATE / comments /: id - Destroy one comment
