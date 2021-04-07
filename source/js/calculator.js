'use strict';
// Формулы расчета для полей:
// Для поля “Первоначальный взнос”: 
// Первоначальный взнос (в процентах) * Стоимость автомобиля
// Для поля “Сумма договора лизинга”:
// Первоначальный взнос + Срок кредита*Ежемесячный платеж
// Для поля “Ежемесячный платеж от”:
// Стоимость автомобиля - Первоначальный взнос*(Процентная ставка/(1+Процентная ставка)-Срок кредита-1) 

const priceSlider = document.querySelector('#filter-price');
const percentSlider = document.querySelector('#filter-percent');
const termSlider = document.querySelector('#filter-term');
const inputPrice = document.querySelector('#price');
const inputPercent = document.querySelector('#percent');
const inputTerm = document.querySelector('#leasing');
const monthlyPaymentElement = document.querySelector('#monthly-payment');
const leasingPriceElement = document.querySelector('#leasing-price');

const STEP_OF_PRICE = 50000;
const INITIAL_PRICE = 1000000;
const STEP_OF_PERCENT = 0.5;
const INITIAL_PERCENT = 10;
const STEP_OF_TERM = 0.59;
const INITIAL_TERM = 1;

let price = inputPrice.value;
let percentPrice = inputPercent.value;
let term = inputTerm.value;
let initialPayment = 0;
let leasePrice = leasingPriceElement.innerText;
let monthlyPayment = monthlyPaymentElement.innerText;

function monthlyPaymentCalculation() {
    monthlyPayment = price - initialPayment * (percentPrice / (1 + percentPrice) - term - 1);
}

function leaseAmountCalculation() {
    leaseAmount = initialPayment + term * monthlyPayment;
}

function initialPaymentCalculation() {
    initialPayment = percentPrice * price;
}

function moveSlider(evt, value, initial, step) {
    const sliderValue = evt.target.value;
    value = sliderValue;
    const backgroundPercent = Math.round((sliderValue - initial) / step);
    const color = `linear-gradient(90deg, rgba(255, 149, 20, 1) ${backgroundPercent}%, rgba(225, 225, 225, 1) ${backgroundPercent}%)`;

    evt.target.style.background = color;
}

function movePriceSlider(evt) {
    moveSlider(evt, price, INITIAL_PRICE, STEP_OF_PRICE);
}

function moveTermSlider(evt) {
    moveSlider(evt, term, INITIAL_TERM, STEP_OF_TERM);
}

function movePercentSlider(evt) {
    moveSlider(evt, percentPrice, INITIAL_PERCENT, STEP_OF_PERCENT);
}

priceSlider.addEventListener('change', movePriceSlider);
percentSlider.addEventListener('change', movePercentSlider);
termSlider.addEventListener('change', moveTermSlider);