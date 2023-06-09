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

// ===================================OLD===========================

// const galleryUl = document.querySelector(".gallery");


// images.forEach (image => {

//   const galleryItem = `
//   <li class="gallery__item" >
//     <img class="gallery__image" src="${image.url}" alt="${image.alt}" width = "320", heigth = "320">
//   </li>
// `;

  

// galleryUl.insertAdjacentHTML("beforeend", galleryItem)



// });

// ===================================NEW===========================



const galleryUL = document.querySelector(".gallery");
const galleryItems = images.map(image => {

   return `<li><img class="gallery__image" src="${image.url}" alt="${image.alt}" width="320"></li>`;
});

galleryUL.insertAdjacentHTML("beforeend", galleryItems.join(""));
