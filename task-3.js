'use strict'
import images from "./image.js"

const gallery = document.getElementById('gallery');
 
const makeGallery = ({ url, alt }) => {
  return `
      <li class="item">
        <img src="${url}" alt="${alt}" width="360" height="300"/>
      </li>`;
};

const makeHTML = images.map(makeGallery).join('');
gallery.insertAdjacentHTML('beforeend', makeHTML);
 
     

    

   

   
    

