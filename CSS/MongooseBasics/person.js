const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// Defining a getter for a virtual property
// this property exists not in the database at all, only on the Mangoose
// we could make a function return a fullName but why store more data in the database
// when we can get the full name from there using virtual.
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})
// A set function will allow us to update the full name too

set(function(v) {
    this.name.first = v.substr(0, v.indexOf(' '));
    this.name.last = v.substr(v.indexOf(' ') + 1);
  });

  //RUN SOME CODE BEFORE THE SAVE HAPPEN.
personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!")
})
// RUN SOME CODE AFTER THE SAVE HAPPEN.
personSchema.post('save', async function () {
    
})

const Person = mongoose.model('Person', personSchema);
