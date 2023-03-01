// Напиши скрипт, який реагує на зміну 
//значення input#font-size-control (подія input) 
//і змінює інлайн-стиль span#text, оновлюючи властивість 
//font-size. В результаті, перетягуючи повзунок, 
//буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const changeFSize = document.querySelector('#font-size-control');

const tSize = document.querySelector('#text');

changeFSize.addEventListener('input', (event) => {
    console.log(event);

    tSize.style.fontSize = event.target.value + 'px';
});