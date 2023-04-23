// const widget = document.querySelector('.widget');
// const colorSpan = widget.querySelector('.color');
// const changeColorBtn = widget.querySelector('.change-color');



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// changeColorBtn.addEventListener('click', () => {
//   const newColor = getRandomHexColor();
//   document.body.style.backgroundColor = newColor;
//   colorSpan.textContent = newColor;
// });


// =================================NEW======================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorBtn = document.querySelector('.change-color');
const colorChange = document.querySelector('.color');
const body = document.querySelector('body');




changeColorBtn.addEventListener('click', () => {

  colorChange.textContent = getRandomHexColor();
  body.style.backgroundColor = colorChange.textContent;

});
