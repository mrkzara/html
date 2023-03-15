const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  menu.classList.toggle('toggle');
});


// Slideshow
let images = document.querySelectorAll('.gallery img');
let currentImage = 0;

function showImage() {
  // Hide current image
  images[currentImage].classList.remove('active');
  // Calculate index of next image
  currentImage = (currentImage + 1) % images.length;
  // Show next image
  images[currentImage].classList.add('active');
  // Wait for 2 seconds before showing next image
  setTimeout(showImage, 4000);
}

// Start slideshow
setTimeout(showImage, 1000);