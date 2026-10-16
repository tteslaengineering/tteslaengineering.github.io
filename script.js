
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const images = slides.querySelectorAll("img");

slides.addEventListener("scroll", function() {

  let index = 0;
  let minDistance = Infinity;

  images.forEach(function(img, i) {

    const distance = Math.abs(
      img.getBoundingClientRect().left -
      slides.getBoundingClientRect().left
    );

    if (distance < minDistance) {
      minDistance = distance;
      index = i;
    }

  });

  dots.forEach(function(dot, i) {
    dot.classList.toggle("active", i === index);
  });

});



const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const popupClose = document.getElementById("popupClose");

document.querySelectorAll(".slider img").forEach(function(img) {
  img.addEventListener("click", function() {
    popupImage.src = this.src;
    popupImage.alt = this.alt;
    imagePopup.classList.add("show");
  });
});

popupClose.addEventListener("click", function() {
  imagePopup.classList.remove("show");
});

imagePopup.addEventListener("click", function(event) {
  if (event.target === imagePopup) {
    imagePopup.classList.remove("show");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    imagePopup.classList.remove("show");
  }
});
