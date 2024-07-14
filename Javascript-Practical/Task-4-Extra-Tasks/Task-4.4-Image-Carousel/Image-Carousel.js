const images = document.querySelectorAll(".carousel-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let currentImage = 0;
let autoChange;

function showImage(index) {
  images[currentImage].classList.remove("active");
  images[index].classList.add("active");
  currentImage = index;
}

function showNextImage() {
  let nextIndex = (currentImage + 1) % images.length;
  showImage(nextIndex);
}

function showPrevImage() {
  let prevIndex = (currentImage - 1 + images.length) % images.length;
  showImage(prevIndex);
}

function startAutoPlay() {
  autoChange = setInterval(showNextImage, 3000);
}

function stopAutoPlay() {
  clearInterval(autoChange);
}

startAutoPlay();
