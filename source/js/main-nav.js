'use strict';

(function () {
  let navMain = document.querySelector('.main-nav');
  let hamburger = document.querySelector('.hamburger');
  let closeList = document.querySelector('.main-nav__list');

  navMain.classList.remove('main-nav--nojs');

  hamburger.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  closeList.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('main-nav__link') && navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  });
})();