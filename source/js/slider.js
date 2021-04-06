'use strict';
(function () {
    let btnRight = document.querySelector(".arrows__button--right");
    let btnLeft = document.querySelector(".arrows__button--left");
    let slides = document.querySelectorAll(".promo__wrapper");
    let toggles = document.querySelectorAll(".toggles__button");

    let activeElement = 1;
    let activeElementToggle = 1;

    btnRight.addEventListener("click", function () {
        slides[activeElement].classList.add("visually-hidden");
        if (activeElement + 1 == slides.length) {
            activeElement = 0;
        } else {
            activeElement++;
        }
        slides[activeElement].classList.remove("visually-hidden");

        toggles[activeElementToggle].classList.remove("toggles__button--active");
        if (activeElementToggle + 1 == toggles.length) {
            activeElementToggle = 0;
        } else {
            activeElementToggle++;
        }
        toggles[activeElementToggle].classList.add("toggles__button--active");
    });


    btnLeft.addEventListener("click", function () {
        slides[activeElement].classList.add("visually-hidden");
        if (activeElement - 1 < 0) {
            activeElement = slides.length - 1;
        } else {
            activeElement--;
        }
        slides[activeElement].classList.remove("visually-hidden");

        toggles[activeElementToggle].classList.remove("toggles__button--active");
        if (activeElementToggle - 1 < 0) {
            activeElementToggle = toggles.length - 1;
        } else {
            activeElementToggle--;
        }
        toggles[activeElementToggle].classList.add("toggles__button--active");
    });
})();