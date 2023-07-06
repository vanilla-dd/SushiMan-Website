function navigation() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav__links");
  hamburger.addEventListener("click", (e) => {
    const visible = nav.getAttribute("data-visible");
    visible === "false"
      ? (nav.setAttribute("data-visible", "true"),
        hamburger.setAttribute("aria-expanded", "true"))
      : (nav.setAttribute("data-visible", "false"),
        hamburger.setAttribute("aria-expanded", "false"));
  });
}
export default navigation;
