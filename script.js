const sliderPrevBtn = document.getElementsByClassName(
  "slider-prev-arrow-div"
)[0];
const sliderNextBtn = document.getElementsByClassName(
  "slider-next-arrow-div"
)[0];
const sliderDiv = document.querySelector(".img-slider");

const images = document.querySelectorAll(".slider-img");

let counter = 0;

images.forEach((img, index) => {
  img.style.left = `${100 * index}%`;
});

window.onload = setInterval(nextSlider, 10000);

function slider(transition) {
  images.forEach((img) => {
    img.style.transition = transition;
    img.style.transform = `translateX(${-counter * 100}%)`;
  });
}
function nextSlider() {
  if (counter >= images.length - 1) {
    counter = 0;
    slider(noTransition);
  } else {
    counter++;
    slider(transition);
  }
}
function prevSlider() {
  if (counter <= 0) {
    counter = images.length - 1;

    slider(noTransition);
  } else {
    counter--;
    slider(transition);
  }
}
const transition = "all 3s ease-in-out";
const noTransition = "none";
sliderNextBtn.addEventListener("click", nextSlider);

sliderPrevBtn.addEventListener("click", prevSlider);

const searchField = document.querySelector("#search-bar");
const darkBackground = document.getElementsByClassName("dark-background")[0];
const body = document.getElementsByTagName("body")[0];

body.addEventListener("click", (e) => {
  if (e.target !== searchField) {
    darkBackground.classList.remove("dark-on-focus");
  } else if (darkBackground.classList.contains("dark-on-focus")) {
    darkBackground.classList.remove("dark-on-focus");
  } else {
    darkBackground.classList.add("dark-on-focus");
  }
});
