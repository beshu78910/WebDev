document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
})

const input = document.querySelector('input');
// The e parameter is passed in automatically
input.addEventListener('keydown', function (e) {
    console.log(e.key) // Use key if you want to know if what letter was press.
    console.log(e.code) //  Use code if you care about the actual key that was pressed on the keyboard
        // or the location of it, this mean that the key might change depend on what language you are using 
        // but the code stay the same..
})
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

// window.addEventListener('keydown', function (e) {
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!");
//             break;
//         case 'ArrowLeft':
//             console.log("LEFT!");
//             break;
//         case 'ArrowRight':
//             console.log("RIGHT!");
//             break
//         default:
//             console.log("IGNORED!")
//     }
// })