const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;
// This is an exports object that implicit expoert an empty
// object if this file is require by other file
// Here we set it explicit by giving it properties
// So it does not matter what is in the file
// The only thing that we are going to export are here 
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

//Shorthands
exports.add = add;
exports.PI = PI;
exports.square = square;
