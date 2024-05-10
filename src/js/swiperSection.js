import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

function createSwiper() {
  const block = document.querySelector(".swiper_second");

  const images = [
    "../../img/swiper/cart2.jpg",
    "../../img/swiper/cart3.jpg",
    "../../img/swiper/cart4.jpg",
    "../../img/swiper/cart2.jpg",
    "../../img/swiper/cart3.jpg",
    "../../img/swiper/cart4.jpg",
  ];

  const list = images.reduce((html, item) => {
    return (
      html +
      ` <div class="swiper_item swiper-slide">
          <img
            class="swiper_item_img"
            src="${item}"
            alt=""
            width="327"
            height="213"
          />
          <img
            class="swiper_item_img_back"
            src="../img/swiper/ingBack.png"
            alt=""
            width="327"
            height="213"
          />
          <div class="swiper_item_content">
            <h3 class="swiper_item_title">Primary Schools</h3>
            <p class="swiper_item_text">
              Whether you're a teacher, leader, or support staff member, we
              connect talented individuals with opportunities in all-through
              schools, ensuring a cohesive and supportive learning experience for
              students across all age groups.
            </p>
            <a href="#" class="swiper_item_link"
              >View Opportunities
              <span class="swiper_item_btn"
                ><svg width="12" height="9">
                  <use
                    href="../img/icons/symbol-defs.svg#icon-arrow-right2"
                  ></use></svg></span
            ></a>
          </div>
        </div>`
    );
  }, "");

  block.insertAdjacentHTML("beforeend", list);

  const swiper = new Swiper(".swiper_swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper_btn_next",
      prevEl: ".swiper_btn_prew",
    },
    on: {
      slideChange: function () {
        document.querySelectorAll(".swiper-slide").forEach((slide) => {
          slide.classList.remove("active");
        });

        this.slides[this.activeIndex].classList.add("active");
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", createSwiper);
