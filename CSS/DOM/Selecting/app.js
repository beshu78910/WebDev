const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}




const allLinks = document.querySelectorAll('a');


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
}
windown.getComputedStyle(h1).color

const test = document.querySelector('h1');
undefined
test.setAttribute('class', 'purple');
undefined
test.setAttribute('class', 'border');
undefined