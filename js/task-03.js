// Використовуй масив об'єктів images для створення 
// лементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки 
// метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися 
// в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або 
// грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeImagesCard = ({
  url,
  alt,
}) => `<li class="gallery-item">
        <img src="${url}" alt="${alt}" width ="380" height = "250">
  </li>`;
// Cтворити масив із розмітки і вставити у список .gallery
const listEl = document.querySelector('.gallery');
const makeImagesMarkup = images.map((data) => makeImagesCard(data)).join('');
listEl.insertAdjacentHTML('afterbegin', makeImagesMarkup);
console.log(makeImagesMarkup);