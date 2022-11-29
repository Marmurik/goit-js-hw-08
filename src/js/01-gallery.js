// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const GalleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', GalleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(
        ({ preview, original, description }) => {
            return `
            <a class="gallery__item" href='${original}'>
            <img class='gallery__image' 
            src='${preview}'
            alt='${description}'/>
            </a>`;
        })
        .join("");
    }
    const lightBox = new SimpleLightbox('.gallery__item', {
        captionsData: 'alt',
        captionDelay: 250,
    });

