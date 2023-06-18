const picBtnContainers = document.querySelector(".pic-filter");
const picContainer = document.querySelector(".pic-list__list");
const pictures = document.querySelectorAll(".pictures");
const pic = document.querySelector(".pic-filter__slide");
const chevron = document.querySelector(".pic-filter__chevron");

pic.addEventListener("click", (e) => {
  console.log("button");

  const active = document.querySelector(".selected");
  // 선택된 아이

  active.classList.remove("selected");
  // 선택된 아이 제거
  // 읽을수없대 뭐를 ? selected를

  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  console.log(e.target);
});

const SHOWING_CLASS = "showing";

chevron.addEventListener("click", (e) => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const firstSlide = document.querySelector(".pic-filter__slide:first-child");
  console.log(currentSlide);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.document.querySelector(
      ".pic-filter__slide:nth-child(2)"
    );
    console.log(nextSlide);
    // 다음슬라이드는 2번째걸 택하고
    // nextSlide 하는 이유 ?
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
    // next 슬라이드가 없을경우
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
});

picBtnContainers.addEventListener("click", (e) => {
  // // 클릭을 하면
  // const active = document.querySelector(".pic-filter__button.selected");
  // active.classList.remove("selected");
  // const target =
  //   e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  // target.classList.add("selected");
  // // 필터가 dataset node를 받고
  // picContainer.classList.add("anim-out");
});
