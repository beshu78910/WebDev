const prices = [9.99, 1.50, 19.99, 0.50, 30.50];

// let total = prices.reduce((accum, current) => {
//     console.log(accum); // store every sum into accum 
//     console.log(current); // go until there is no next value 
//     return accum + current;
    
// })

let least = prices.reduce((min, current) => {
    
    if (current > min) {
        // console.log(min);
        console.log(current); // 19.99, 30.50; ,30.50;
        return current;
    }
    // console.log(min);
    return min;
    
});

console.log(least);
// You can add a second argument for reduce function.

let least = prices.reduce((min, current) => {
    
    if (current > min) {
        // console.log(min);
        console.log(current); // 19.99, 30.50; ,30.50;
        return current;
    }
    // console.log(min);
    return min;
    
}, 100); // The argument will be the inital value for the reducer function 