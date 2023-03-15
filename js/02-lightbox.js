import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `;
    })
    .join('');
}

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});



