import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




const galleryContainer = document.querySelector('.gallery');

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join('');
}

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);


galleryContainer.addEventListener('click', evt => {
  evt.preventDefault();

  const target = evt.target;
  if (target.nodeName !== 'IMG') {
    return;
  }

  const largeImageSrc = target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${largeImageSrc}" width="800" height="600">
  `);

  instance.show();

  const closeModal = () => {
    instance.close();
    document.removeEventListener('keydown', onEscKeyPress);
  };

  const onEscKeyPress = evt => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  document.addEventListener('keydown', onEscKeyPress);
  instance.element().querySelector('.basicLightbox__placeholder').addEventListener('click', closeModal);
});


