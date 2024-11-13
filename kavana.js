// Array of image file paths
const images = ["img1.jpg","img2.jpg","img3.jpg" ,"img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg","kaa.jpg","oo.jpg","chutki.jpg"];
let currentImageIndex = 0;

function openImage(index) {
  currentImageIndex = index - 1;
  updateDisplayedImage();
}

function updateDisplayedImage() {
  document.getElementById("displayedImage").src = images[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateDisplayedImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateDisplayedImage();
}
