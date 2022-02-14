fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("Responese", res)
    })
    .catch(e => {
        console.log("OH NO! ERROR!", e)
    })