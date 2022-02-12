const getHello = document.querySelector('#hello');
const getBye = document.querySelector('#goodbye');

getHello.addEventListener('click', () => {
    console.log("hello");
}
)


getBye.addEventListener('click', () => {
    console.log("goodbye");
}
)