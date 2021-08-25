const toggleIcon = document.querySelector(".navbar__toggle");
const aside = document.querySelector(".aside");

toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("show");
  aside.classList.toggle("show");
});
