// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const getContainer = document.querySelector('#container');



for (let i = 0; i <= 151; i++){
    const makeImage = document.createElement('img');
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    pokemon.classList.add('pokemon');
    label.innerText = `$${i}`;
    const createText = document.createElement('p');
    makeImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    pokemon.appendChild(makeImage);
    pokemon.appendChild(label)
    getContainer.append(pokemon);
}
