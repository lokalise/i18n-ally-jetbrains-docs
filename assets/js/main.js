var button = document.querySelector(".mb-burger");
var header = document.querySelector(".header");

if (button) {
  button.addEventListener("click", function (event) {
    header.classList.toggle("mb-open-nav");
    event.preventDefault();
  });
}

var toggleLeft = document.querySelector("[data-toggle='ways-column--left']");
var toggleRight = document.querySelector("[data-toggle='ways-column--right']");
var wayLeft = document.querySelector(".ways-column--left");
var wayRight = document.querySelector(".ways-column--right");

if (toggleLeft) {
  toggleLeft.addEventListener("click", function () {
    if (!toggleLeft.classList.contains("ways-column--active")) {
      toggleClass(wayRight, wayLeft, "ways-column--active");
      toggleClass(toggleLeft, toggleRight, "ways-control--active");
    }
  });
}

if (toggleRight) {
  toggleRight.addEventListener("click", function () {
    if (!toggleRight.classList.contains("ways-column--active")) {
      toggleClass(wayRight, wayLeft, "ways-column--active");
      toggleClass(toggleLeft, toggleRight, "ways-control--active");
    }
  });
}

function toggleClass(a, b, className) {
  a.classList.toggle(className);
  b.classList.toggle(className);
}
