// script.js
function showImage(element) {
    var src = element.src.replace('thumb6', 'large');
     // Assuming large images have 'large' in their filenames
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
