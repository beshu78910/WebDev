const btn = document.querySelector('button');
const bg = document.querySelector('body');
const h1 = document.querySelector('h1');

btn.style.display = 'block';
btn.addEventListener('click', function ()  {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g},${b})`
    bg.style.backgroundColor = newColor;
    h1.innerText = newColor;
})
bg.append(btn);