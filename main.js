import "./styles/reset.css";
import "./styles/utils.css";
import "./styles/header.css";
const hamburger = document.querySelector(".open");
const nav = document.querySelector(".nav__links");
hamburger.addEventListener("click", (e) => {
  nav.classList.toggle("show");
});
