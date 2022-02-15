fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("Response, waiting to parse", res)
        // return a promise (which mean it can be chain)
        // Basically this is saying when all the data is back
        // and it has been parse to json();
        return res.json()
        
    })
    // at this point the parsed to jason is finished
    // and the data we want is returned.
    // we can access those data by chaing then.
    .then(data => {
        console.log("Data Parsed")
        console.log(data.ticker.price)
    })
    .catch(e => {
        console.log("OH NO! ERROR!", e)
    })
// fetch function return a promise
// The problem with fetch is that as soon as fetch
// recived the header from the API, fetch will resolved
// and proceed to trigger .then() so it does not wait for all
// the data is coming back, => which mean that you are not guarantee
// to recived the rest of the content (body, footer)

// Asyn version
const test = async function request() {
    try {
        let data1 = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log("Something went wrong",e);
   }
    
}