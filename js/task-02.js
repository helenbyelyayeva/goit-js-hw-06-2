
//Напиши скрипт, який для кожного елемента масиву ingredients:
//Створить окремий елемент <li>.
//Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію 
//у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
console.log(list);
const elements = ingredients.forEach((el) => {
  const element = document.createElement("li");
  element.className = "item";
  element.textContent = `${el}`;
  list.append(element);
  console.log(element);
});