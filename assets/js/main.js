var button = document.querySelector(".mb-burger");
var header = document.querySelector(".header");

button.addEventListener("click", function () {
  header.classList.toggle("mb-open-nav");
});

const toggleLeft = document.querySelector("[data-toggle='ways-column--left']");
const toggleRight = document.querySelector(
  "[data-toggle='ways-column--right']"
);

const wayLeft = document.querySelector(".ways-column--left");
const wayRight = document.querySelector(".ways-column--right");

toggleLeft.addEventListener("click", function () {
  toggleClass(wayRight, wayLeft, "ways-column--active");
  toggleClass(toggleLeft, toggleRight, "ways-control--active");
});

toggleRight.addEventListener("click", function () {
  toggleClass(wayRight, wayLeft, "ways-column--active");
  toggleClass(toggleLeft, toggleRight, "ways-control--active");
});

function toggleClass(a, b, className) {
  a.classList.toggle(className);
  b.classList.toggle(className);
}
