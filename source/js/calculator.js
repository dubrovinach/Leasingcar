'use strict';

let slider = document.querySelector('.filter__scale');

function moveSlider() {
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgba(255, 149, 20, 1)' + x + '%, rgba(225, 225, 225, 1)' + x + '%)';

    slider.style.background = color;
}

slider.addEventListener('mousemove', moveSlider)