let button = document.querySelector("#toggle-btn"); // get button
let menu = document.querySelector("#menu"); //get menu
let storySlider = document.querySelector(".slider-stories");
let partnerSlider = document.querySelector(".partner-slider");
let form = document.querySelector(".contact-form");

button.addEventListener("click", (e) => {
  menu.classList.toggle("hide");
});
// slider
let slider = (el, delay) => {
  let slideBtn = Array.from(el.querySelectorAll(".slide-btn"));
  let sliderWraper = el.querySelector(".slider-wraper");
  let slideCount = sliderWraper.children.length;
  let slideList = Array.from(sliderWraper.children);
  let slideData = getComputedStyle(sliderWraper.children[0]);
  let sliderPosition = sliderWraper.parentNode.getBoundingClientRect();
  let visibleElements = 0;
  let count = 0;
  let slideWidth =
    parseInt(slideData.width) +
    parseInt(slideData.marginLeft) +
    parseInt(slideData.marginRight);
  slideList.forEach((slide) => {
    let slidePosition = slide.getBoundingClientRect();
    if (
      slidePosition.left >= sliderPosition.left &&
      slidePosition.right <= sliderPosition.right
    ) {
      visibleElements++;
    }
  });

  let nextSlide = () => {
    count++;
    if (count > slideCount - visibleElements) {
      count = 0;
    }
    sliderWraper.style.transform = `translateX(-${count * slideWidth}px)`;
  };
  let prewSlide = () => {
    count--;
    if (count < 0) {
      count = slideCount - 12;
    }
    sliderWraper.style.transform = `translateX(-${count * (slideWidth + 2)}px)`;
  };
  setInterval(nextSlide, delay);
  slideBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.classList.contains("next")) {
        nextSlide();
      } else if (e.target.classList.contains("prew")) {
        prewSlide();
      }
    });
    console.log(visibleElements);
  });
};
slider(storySlider, 5000);
slider(partnerSlider, 4000);
// form validation
let validation = (form) => {
  let inputs = Array.from(
    form.querySelectorAll("input[type='text'],input[type='email'],textarea")
  );
  let action = form.action;
  let method = form.method;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach((inp) => {
      let length = inp.value.length;
      let pattern = inp.dataset.pattern;
      let val = inp.value;
      let reg = new RegExp(pattern, "gim");
      let drawSuc = (a) => {
        a.parentNode.querySelector(".err-text").textContent = "";
        a.classList.remove("err");
      };
      let drawErr = (a, b) => {
        b.parentNode.querySelector(".err-text").textContent = a;

        b.classList.add("err");
      };
      if (length > 1) {
        let result = val.search(reg);
        if (result !== -1) {
          drawSuc(inp);
        } else {
          drawErr(`Please enter corect your ${inp.name}`, inp);
        }
      } else {
        drawErr(`Please enter your ${inp.name}`, inp);
      }
    });
  });
};
validation(form);
