const menuToggleBtn = document.querySelector(".main-header__nav-toggle-btn");
const mainNav = document.querySelector(".main-header__nav");

function menuToggleClickHandler() {
  mainNav.classList.toggle("menu-open");
}

menuToggleBtn.addEventListener("click", menuToggleClickHandler);
