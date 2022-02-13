// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// fakeRequestCallback('books.com/page1',
//     function (respone) {
//         console.log("IT WORKED!")
//         console.log(respone)
//         fakeRequestCallback('books.com/page2',
//             function (respone1) {
//                 console.log('page 2 successful')
//                 console.log(respone2);
//             },
//             function (failurecase) {
//                 console.log('yes failed')
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err);
// })

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })

const request = fakeRequestPromise('yelp.com/api/coffee/page1');

// request.then(() => { // if a promise is resolved or passed then
//     //then() take a function (call back) and only run when the condition of
//     // fakeRquestPromise passed.
//     console.log("Promise Resolved");
//     console.log('It Worked');
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//         .then(() => {
//             console.log("PROMISE RESOLVED (2)!")
//             fakeRequestPromise('yelp.com/api/coffee/page2')
//                 .then(() => {
//                     console.log("page3 passed");
//                 })
//                 .catch(() => {
//                     console.log('page 3 error');
//                 })
//         })
//         .catch(() => {
//             console.log("OH NO, ERROR!!!");
//         })
    
// }).catch(() => {
//     console.log("Promise Rejected");
//     console.log("OH NO, ERROR!!!");
// })

// The Magic of Promise 
fakeRequestPromise('yelp.com/api/coffee/page1')
    // data from the fakeRequestPromise function
    // promise object
    .then((data) => {
        // If the request work for page 1
        console.log("IT WORKED!!!!")
        // Return the page 2 fakeRequest object from within the first 
        // then() callback.
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    // this then is called directly on the return fakeRequest from page 2
    .then(() => {
        console.log("IT WORKED!!!!!! (page2)")
        return fakeRequestPromise('yelp/page3');
    })
    .then(() => {
        console.log('work');
    })
    // This catch will catch if any of the then() case failed
    // you can also passed in a value when it rejected
    .catch((err) => {
        console.log("it does not work");
    })



// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })



// In the past there usually this is how javascript developer creating request.
makeRequest(() => {
// The first call back is the success case.
},() => {
// The second call back is the failure case.
})
