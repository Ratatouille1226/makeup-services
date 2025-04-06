const buttonTabs = document.querySelectorAll(".tabheader__item");
tabsParent = document.querySelector(".tabheader");
tabs = document.querySelectorAll(".tabcontent");

function hideTabs() {
  tabs.forEach((item) => {
    item.style.display = "none";
  });

  buttonTabs.forEach((item) => {
    item.classList.remove("tab__active");
  });
}
hideTabs();

function showTabs(i = 0) {
  tabs[i].style.display = "block";
  buttonTabs[i].classList.add("tab__active");
}
showTabs();

tabsParent.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains("tabheader__item")) {
    buttonTabs.forEach((item, i) => {
      if (target == item) {
        hideTabs();
        showTabs(i);
      }
    });
  }
});

AOS.init({
  delay: 400,
  duration: 700,
  once: true,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  watchOverflow: true,
  grabCursor: true,
  autoplay: {
    delay: 3000, // Задержка в миллисекундах (3 секунды)
    disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии
  },
});
