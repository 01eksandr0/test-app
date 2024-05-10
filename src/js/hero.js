import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".hero", {
    loop: true,
    navigation: {
      nextEl: ".hero_btn_next",
      prevEl: ".hero_btn_prew",
    },
  });
});
