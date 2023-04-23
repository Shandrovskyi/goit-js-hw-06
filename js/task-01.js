
// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.

//========================================//

// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
// і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод 
// forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.




// ============================OLD========================================

// const categoriesList = document.querySelector('#categories');
// const items = categoriesList.querySelectorAll('.item')

// console.log(`Number of categories ${items.length}`);


// items.forEach((item)=>{

// const paragraphH2 = item.querySelector('h2').textContent;
// const elementsLi = item.querySelectorAll('li').length;

// console.log(`Category: ${paragraphH2}`);
// console.log(`Elements: ${elementsLi}`);


// });

// ==========================NEW=========================================

const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item')

console.log(`Number of categories ${items.length}`);


items.forEach((item)=>{

const paragraphH2 = item.firstElementChild.textContent;
const elementsLi = item.lastElementChild.children.length;

console.log(`Category: ${paragraphH2}`);
console.log(`Elements: ${elementsLi}`);


});
