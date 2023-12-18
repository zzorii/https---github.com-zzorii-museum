// 언어변경
$(document).ready(function () {
  // .lang-en 클릭 시
  $(".lang-en").click(function () {
    // 스타일 변경
    $(this).css({
      background: "#111",
    });
    $(this).find("a").css({
      color: "#fff",
    });

    // .lang-kr 스타일 초기화
    $(".lang-kr").css({
      background: "none",
      border: "1px solid #111",
    });
    $(".lang-kr a").css({
      color: "#111",
    });
  });

  // .lang-kr 클릭 시
  $(".lang-kr").click(function () {
    // 스타일 변경
    $(this).css({
      background: "#111",
    });
    $(this).find("a").css({
      color: "#fff",
    });

    // .lang-en 스타일 초기화
    $(".lang-en").css({
      background: "none",
      border: "1px solid #111",
    });
    $(".lang-en a").css({
      color: "#111",
    });
  });
});

// main-slide
var swiper1 = new Swiper(".slide-intro", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 정지,재생 버튼

$(".swiper-btn-play").on("click", function () {
  swiper1.autoplay.start();
  return false;
});
$(".swiper-btn-stop").on("click", function () {
  swiper1.autoplay.stop();
  return false;
});

//전시안내
var swiper2 = new Swiper(".show-contents", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".show-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".show-button-next",
    prevEl: ".show-button-prev",
  },
  breakpoints: {
    428: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    744: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
  },
});

// 협회네트워크
AOS.init();

// footer 관련단체 자동재생
var mySwiper3 = new Swiper(".footer-bnr-slide", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  loopAdditionalSlides: 1,
  // initialSlide: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".footer-btn-next",
    prevEl: ".footer-btn-prev",
  },
});

// 슬라이드 재생 버튼 클릭 시
$(".footer-btn-play a").on("click", function (e) {
  e.preventDefault(); // 기본 동작을 방지
  mySwiper3.autoplay.start();
  return false;
});

$(".footer-btn-stop").on("click", function (e) {
  e.preventDefault(); // 기본 동작을 방지
  mySwiper3.autoplay.stop();
  return false;
});

// 슬라이드 이전 버튼 클릭 시
$(".footer-btn-prev a").on("click", function (e) {
  e.preventDefault(); // 기본 동작을 방지
  mySwiper3.slidePrev(); // 이전 슬라이드로 이동
  return false;
});

// 슬라이드 다음 버튼 클릭 시
$(".footer-btn-next a").on("click", function (e) {
  e.preventDefault(); // 기본 동작을 방지
  mySwiper3.slideNext(); // 다음 슬라이드로 이동
  return false;
});

// footer f-S
$(document).ready(function () {
  $(".family-site").click(function (event) {
    event.preventDefault(); // 이벤트 기본 동작을 중지합니다.
    $(".family-lst").toggleClass("opacity");
    $(".icon").toggleClass("rotate");
  });
});
