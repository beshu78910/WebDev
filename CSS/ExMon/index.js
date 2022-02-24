const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// get content from export file
const Product = require('./models/product');
const methodOverride = require('method-override');
const { resolveSrv } = require('dns/promises');
app.use(methodOverride('_method'))
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// middleware for parsing data in body
app.use(express.urlencoded({ extended: true }));
app.get('/products', async (req, res) => {
    const products = await Product.find({})
   
    res.render('products/index', { products });
})



// Delcraing route for delete 
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id)
    res.redirect('/products');
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.render('products/edit', {product})
})
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Products.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });;
    console.log(req.body)
    res.redirect(`/products/${product._id}`)
   
})

app.get('/products/new', async (req, res) => {
    res.render('products/new')
})

app.get('/products/:id/edit', (req, res) => {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.render('products/edit', {product})
})


app.post('/products', async (req, res) => {
    // set newProducts = req.body object
    const newProducts = new Product(req.body);
    // save that to mongoose data based.
    await newProducts.save();
    res.redirect('/products/${newProduct._id');

})


app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const productById = await Product.findById(id)
    // console.log(productById.price);
    res.render('products/show', {productById})
})


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})
