// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>



const refs = {
    textInput: document.querySelector('#name-input'),
    nameChange: document.querySelector('#name-output'),
    };
    refs.textInput.addEventListener('input', onInputChange);
    function onInputChange(event) {
           refs.nameChange.textContent = event.target.value;
    if (refs.nameChange.textContent == '') {
                  refs.nameChange.value = "Anonymous";
                }
              }
