// header
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const slideMenu = document.getElementById("slide-menu");
const slideLinks = document.querySelectorAll(".slide-menu .links a");

closeIcon.onclick = () => {
  slideMenu.classList.remove("active");
};
slideLinks.forEach((ele) => {
  ele.onclick = () => {
    slideMenu.classList.remove("active");
  };
});
openIcon.onclick = () => {
  slideMenu.classList.add("active");
};

// swiper

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
