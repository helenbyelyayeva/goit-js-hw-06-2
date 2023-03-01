const categoriesEl = document.querySelectorAll('li.item');

const numberOfcategoriesEl = categoriesEl.length;

console.log(`Number of categories: ${numberOfcategoriesEl}`);

const categoryEl = categoriesEl.forEach(el => {
    const category = el.firstElementChild.textContent;
    const elements = el.lastElementChild.children.length;
    console.log(`Category: ${category} 
Elements: ${elements}`)
});