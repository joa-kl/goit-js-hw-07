import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsGrid = galleryItems
    .map((image) => {
        return `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`;
    })
    .join("");

gallery.innerHTML = galleryItemsGrid;
gallery.addEventListener("click", openModal);

function openModal(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    function closeModal(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});