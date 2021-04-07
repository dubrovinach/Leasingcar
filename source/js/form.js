'use strict';

(function () {
    const URLPOST = 'https://httpbin.org/post';
    let request = document.querySelector('.request');
    let requestOverlay = document.querySelector('.request-overlay');
    let form = document.querySelector('.form-request');
    let buttons = document.querySelectorAll('.global-button:not(.form-request__button)');

    function openPopup(evt) {
        evt.preventDefault();
        request.classList.remove('visually-hidden');
        requestOverlay.classList.add('request-overlay--active');
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mousedown', openPopup)
    }

    function closePopup() {
        request.classList.add('visually-hidden');
        requestOverlay.classList.remove('request-overlay--active');
    }

    let formReset = document.querySelector('.request__button');
    formReset.addEventListener('mousedown', closePopup);

    function postData(data) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                closePopup();
                alert('Успешно!');
            } else {
                alert('Ошибка отправки');
            }
        })
        xhr.open('POST', URLPOST);
        xhr.send(data);
    }

    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        postData(new FormData(form));
    });

})();