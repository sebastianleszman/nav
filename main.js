const menuToggle = document.querySelector(".main-header__nav-toggle-btn");

function menuToggleClickHandler() {
  menuToggle.classList.toggle("menu-open");
}

menuToggle.addEventListener("click", menuToggleClickHandler);
