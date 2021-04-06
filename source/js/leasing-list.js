'use strict';

(function () {
    let link = document.querySelector('.main-nav__link--leasing');
    let list = document.querySelector('.main-nav__leasing');

    link.onmouseover = function () {
        list.classList.remove('visually-hidden')
    }
})();