let gallery = document.getElementById("gallery");
let close = document.getElementById("close");
let previewImg = document.getElementById("previewImg");
let inputUrl = document.getElementById("imageUrl");

let images = [
  "./Images/1.jpg",
  "./Images/2.jpg",
  "./Images/3.jpg",
  "./Images/4.jpg",
];

function displayImages() {
  gallery.innerHTML = "";
  images.forEach((src, index) => {
    gallery.innerHTML += `
          <div class="gallery-image">
            <img src="${src}" onclick="openImage('${src}')">
            <button class="delete-button" onclick="removeImage(${index})">Delete</button>
          </div>
        `;
  });
}

function openImage(src) {
  previewImg.src = src;
  close.style.display = "flex";
}

function closeImages() {
  close.style.display = "none";
}

function removeImage(index) {
  images.splice(index, 1);
  displayImages();
}

function addImage() {
  console.log(images);
  images.push(inputUrl.value);
  inputUrl.value = "";
  displayImages();
}

displayImages();
