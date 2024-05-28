const menu = document.getElementById("left-menu");
const burger = document.getElementById("burger-con");
burger.onclick = () => {
  menu.classList.toggle("active");
};
