'use strict';

(function () {
    let link = document.querySelector('.main-nav__link--leasing');
    let list = document.querySelector('.main-nav__leasing');

    link.onmouseover = function () {
        list.style.display = 'block';
    }
    link.onmouseout = function () {
        list.style.display = 'none';
    }
})();