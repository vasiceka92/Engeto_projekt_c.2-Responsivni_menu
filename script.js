const navIconCont = document.querySelector(".menu-icon");
const iconsClass = document.querySelector(".fa-solid");
const navigationCont = document.querySelector(".navigation");

navIconCont.addEventListener("click", () => {
  if (iconsClass.classList[1] === "fa-bars") {
    iconsClass.classList.add("fa-xmark");
    iconsClass.classList.remove("fa-bars");
    navigationCont.style.visibility = "visible";
  } else {
    iconsClass.classList.add("fa-bars");
    iconsClass.classList.remove("fa-xmark");
    navigationCont.style.visibility = "hidden";
  }
});
