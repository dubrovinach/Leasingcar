'use strict';

const priceInput = document.querySelector('#price');
const priceRange = document.querySelector('#filter-price');

const percentInput = document.querySelector('#percent');
const percentRange = document.querySelector('#filter-percent');
const percentOutput = document.querySelector('#percent-ouput')

// Срок лизинга
const leasingInput = document.querySelector('#leasing');
const leasingRange = document.querySelector('#filter-leasing');

// Сумма договора лизинга
const leasingPriceElement = document.querySelector('#leasing-price');
// Ежемесячный платеж
const monthlyPaymentElement = document.querySelector('#monthly-payment');

const STEP_OF_PRICE = 50000;
const INITIAL_PRICE = 1000000;

const STEP_OF_PERCENT = 0.5;
const INITIAL_PERCENT = 10;

const STEP_OF_LEASING = 0.59;
const INITIAL_LEASING = 1;

// Цена
let price = Number(priceRange.value);
// Первоначальный взнос
let initialPayment = Number(percentInput.value);
// Первоначальный взнос в %
let percentPrice = Number(percentRange.value);
// Срок лизинга
let leasing = Number(leasingRange.value);
// Сумма договора лизинга
let leasingPrice = Number(leasingPriceElement.innerHTML);
// Ежемесячный платеж
let monthlyPayment = Number(monthlyPaymentElement.innerHTML);

// “Первоначальный взнос”
function initialPaymentCalculation() {
    initialPayment = Math.round((percentPrice / 100) * price);
    percentInput.value = initialPayment;
}

function leaseAmountCalculation() {
    leasingPrice = Math.round(initialPayment + leasing * monthlyPayment);
    leasingPriceElement.innerHTML = leasingPrice;
}

// Стоимость автомобиля - Первоначальный взнос*(Процентная ставка/(1+Процентная ставка)-Срок кредита-1)
// Нигде не задаётся процентная ставка
// Есть только первоначальный взнос в %, а ставки нет
function monthlyPaymentCalculation() {
    monthlyPayment = Math.round(price - initialPayment * (percentPrice / (1 + percentPrice) - leasing - 1));
    monthlyPaymentElement.innerHTML = monthlyPayment;
}

function moveSlider(target, initial, step) {
    const backgroundPercent = Math.round((target.value - initial) / step);
    const color = `linear-gradient(90deg, rgba(255, 149, 20, 1) ${backgroundPercent}%, rgba(225, 225, 225, 1) ${backgroundPercent}%)`;

    target.style.background = color;
    initialPaymentCalculation();
    leaseAmountCalculation();
    monthlyPaymentCalculation();
}

function movePriceSlider(evt) {
    const target = evt.target;
    priceInput.value = target.value;
    price = target.value;
    moveSlider(target, INITIAL_PRICE, STEP_OF_PRICE);
}

function moveLeasingSlider(evt) {
    const target = evt.target;
    leasingInput.value = target.value;
    leasing = target.value;
    moveSlider(target, INITIAL_LEASING, STEP_OF_LEASING);
}

function movePercentSlider(evt) {
    const target = evt.target;
    percentOutput.innerHTML = target.value;
    percentPrice = target.value;
    moveSlider(target, INITIAL_PERCENT, STEP_OF_PERCENT);
}

initialPaymentCalculation();
leaseAmountCalculation();
monthlyPaymentCalculation();

priceRange.addEventListener('change', movePriceSlider);
percentRange.addEventListener('change', movePercentSlider);
leasingRange.addEventListener('change', moveLeasingSlider);