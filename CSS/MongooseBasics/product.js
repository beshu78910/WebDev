const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    // A longer way to set validation
    // but more specific than before
    name: {
        type: String,
        required: true,
        // Setting validation for nmae
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        // Validation for price
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    // Setting a array only consist of string
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }

});

const Product = mongoose.model('Product', productSchema);
// Static method
Product.find()
// Instance method
// save is a method on an instance of product
new Product().save 



const bike = new Product({ name: 'Bike', price: 19.50, categories: ['string1', 'string2', 'string3']})
// When saving to mongo, if something goes wrong 
// do that else do something else
// validation
bike.save() 
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
})
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err.errors.name.properties.message)
    })
// create a new method for productSchema
productSchema.methods.greet = function () {
    console.log("HELLLO!!! HI!! HOWDY!!! ")
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}


productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}


productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}


const Product = mongoose.model('Product', productSchema);


const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res))

findProduct();







// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })

Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, { new: true, runValidators: true })
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err)
    })


