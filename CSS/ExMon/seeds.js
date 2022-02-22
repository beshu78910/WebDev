const Product = require('./models/product');
const mongoose = require('mongoose');
// get content from export file
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err)
    })
// No Web App involed, no server, no express
// seeds data base seperate from webapp.
// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => console.log(p)).catch(e => {
//     console.log(e)
// })

// Mangoose will validate these condition before inserting anything
const seedProducts = [{
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
},
    {
    name: 'Orange',
    price: 2.50,
    category: 'fruit'
    },
    {
    name: 'Organic Milk',
    price: 1.50,
    category: 'dairy'
    },
    {
    name: 'Cabbage',
    price: 0.50,
    category: 'vegetable'
}]
// If the inserted seedProeucts does not pass validation
// then nothing will be inserted
Product.insertMany(seedProducts).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})

