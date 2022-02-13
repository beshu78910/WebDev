// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const li = document.querySelector('#list');
const qty = document.querySelector('#qty');
const product = document.querySelector('#product');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const createLi = document.createElement('li');
    const productName = product.value;
    createLi.innerText = `${qty.value} ${productName}`;
    // createLi.appendChild([0]);
    li.appendChild(createLi);
    qty.value = "";
    product.value = "";
    
})