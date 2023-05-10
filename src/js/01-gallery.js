// Add imports above this line
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log(simpleLightbox);

const galleryList = document.querySelector('.gallery');

galleryItems.forEach(event => {

    const galleryHtml = `
        <li>
            <a class = "gallery__item" href = "${event.original}">
                <img 
                    class = "gallery__image" 
                    src = "${event.preview}"
                    alt = "${event.description}">
            </a>
        </li>`

    galleryList.insertAdjacentHTML('beforeend', galleryHtml);
});

const newGallery = new simpleLightbox('.gallery a' , {
    captions: true,
    captionsData: 'alt',
    captionDelay: '250',
    captionPosition: 'bottom'
});