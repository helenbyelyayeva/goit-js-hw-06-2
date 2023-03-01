// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginFormEl = document.querySelector(".login-form");
console.log(loginFormEl.querySelector('input[name = email]'));
loginFormEl.addEventListener("submit", (event) => {
event.preventDefault();
const inputEmailEl = loginFormEl.querySelector('input[name = email]');
const inputPassEl = loginFormEl.querySelector('input[name = password]');
const inputPassElLength = inputPassEl.value.trim().length;
const inputEmailElLength = inputEmailEl.value.trim().length;
if(inputPassElLength === 0 || inputEmailElLength === 0 ) {
    return alert("Всі поля мають бути заповненими!");
} else {
    const elements = {
        email: inputEmailEl.value,
        password: inputPassEl.value,
    }
    loginFormEl.reset();
    console.log(elements);
}
});
