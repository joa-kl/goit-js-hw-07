import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const gallery = document.querySelector('.gallery');
const galleryItemsGrid = galleryItems
    .map((image) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`;
    })
    .join('');


gallery.innerHTML = galleryItemsGrid;
gallery.addEventListener('click', openModal);

function openModal(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${image.original}" alt="${image.description}">`
    )
}

instance.show();