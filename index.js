burger = document.querySelector(".burger");
navbar = document.querySelector("#navbar");
menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("v-class");
  navbar.classList.toggle("h-nav");
});
