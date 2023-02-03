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

function slider(transition) {
  images.forEach((img) => {
    img.style.transition = transition;
    img.style.transform = `translateX(${-counter * 100}%)`;
  });
}
const transition = "all 3s ease-in-out";
const noTransition = "none";
sliderNextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) {
    counter = 0;
    slider(noTransition);
  } else {
    counter++;
    slider(transition);
  }
});

sliderPrevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    counter = images.length - 1;

    slider(noTransition);
  } else {
    counter--;
    slider(transition);
  }
});
