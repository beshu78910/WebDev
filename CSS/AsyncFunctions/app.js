async function hello() {

}
// The async always return promise 
// so you don't need to write return new Prome();

const sing = async () => {
    // If there is an error in asyn function 
    // that magical promise that's created is going to be 
    // rejected. Similarly to new Promise(resolved, rejected)
    // throw new Error("AHHH!!!!");
    return 'LALALALALA';
}
// Since async() return a promise,
// we can then() or catch() based on what result we have
sing.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('err');
})

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return "WELCOM!"
    throw 'invalid PaSSWORd'
}
login('something', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
            console.log("ERROR!")
            console.log(err)
    })

