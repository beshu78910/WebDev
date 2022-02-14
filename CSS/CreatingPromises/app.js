// Promise take two functions as arguments
// if you don't called resolve or reject in promise function
// the promise status will be pending.
new Promise((resolve, reject) => {
    
})

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data here');
                }
            reject('Requsest Error!');
            }, 1000)
        })
}
fakeRequest('/dogs/1')
    .then(() => {
        console.log("DONE WITH REQUEST")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO",err)
    })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('YOUR FAKE DATA HERE');
//             }
//             reject('Request Error!');
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("DONE WITH REQUEST!")
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log("OH NO!", err)
//     })


// // const delayedColorChange = (newColor, delay, doNext) => {
// //     setTimeout(() => {
// //         document.body.style.backgroundColor = newColor;
// //         doNext && doNext();
// //     }, delay)
// // }

// // delayedColorChange('red', 1000, () => {
// //     delayedColorChange('orange', 1000, () => {
// //         delayedColorChange('yellow', 1000, () => {
// //             delayedColorChange('green', 1000, () => {
// //                 delayedColorChange('blue', 1000, () => {
// //                     delayedColorChange('indigo', 1000, () => {
// //                         delayedColorChange('violet', 1000, () => {

// //                         })
// //                     })
// //                 })
// //             })
// //         })
// //     })
// // });

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => {
       return delayedColorChange('white', 1000);
    })
    .then(() => {
        return delayedColorChange('black', 1000);
    })
    .catch(() => {
        console.log('Error');
    })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }


// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

// we can rewrite delayedColorChange to use await instead of then().
async function rainbow() {
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await  delayedColorChange('green', 1000)
    await  delayedColorChange('blue', 1000)
    await  delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}
// await will wait for the function to be resovled then continue to the nexst function
// await should be use inside of async function 

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page1');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
   }
}