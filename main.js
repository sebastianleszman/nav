const menuToggleBtn = document.querySelector(".main-header__nav-toggle-btn");
const mainNav = document.querySelector(".main-header__nav");

function menuToggleClickHandler() {
  mainNav.classList.toggle("menu--active");
  menuToggleBtn.classList.toggle("hamburger--active");
}

menuToggleBtn.addEventListener("click", menuToggleClickHandler);

document.addEventListener("keydown", function (event) {
  if (mainNav.classList.contains("menu--active")) {
    if (event.key === "Escape") {
      mainNav.classList.remove("menu--active");
      menuToggleBtn.classList.remove("hamburger--active");
    }
  }
});

/* menu hide */
window.addEventListener("scroll", function () {
  if (wScrollCurrent <= 0)
    // scrolled to the very top; element sticks to the top
    element.style.top = "0px";
  else if (wScrollDiff > 0)
    // scrolled up; element slides in
    element.style.top = (elTop > 0 ? 0 : elTop) + "px";
  else if (wScrollDiff < 0) {
    // scrolled down
    if (wScrollCurrent + wHeight >= dHeight - elHeight)
      // scrolled to the very bottom; element slides in
      element.style.top =
        ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + "px";
    // scrolled down; element slides out
    else
      element.style.top =
        (Math.abs(elTop) > elHeight ? -elHeight : elTop) + "px";
  }
});
