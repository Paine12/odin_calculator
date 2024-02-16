const p = document.querySelector(".scr-text")
const smallText = document.querySelector('.small-text')

const numbers = document.querySelectorAll('.numbers')

const additionButton = document.querySelector('.addition')
const subtractionButton = document.querySelector('.subtraction')

const multiplierButton = document.querySelector('.multiplication')
const dividerButton = document.querySelector('.divide')

const powerButton = document.querySelector(".power")

const del = document.querySelector('.delete')
const clear = document.querySelector('.clear')

const equals = document.querySelector('.equals')

let val = '';

let calc = 0;

function addNumber (value) {
    val = val + value;
    console.log(val);
    p.textContent = val;
}

function delNumber () {
    val = val.slice(0 , -1)
    p.textContent = val;
}

function clearNum () {
    val = '';
    p.textContent = val;
    smallText.textContent = calc;
}

function addition() {
    calc += Number(val);
    alt = Number(val);
    clearNum();

}

function subtraction() {
    calc -= Number(val);
    alt = Number(val);
    clearNum();

}

function multiplication() {
    calc *= Number(val);
    alt = Number(val);
    clearNum();

}

function divide() {
    calc /= Number(val);
    alt = Number(val);
    clearNum();

}

function power() {
    calc += Math.pow(calc, val);
    alt = Number(val);
    clearNum();

}



del.addEventListener("click", delNumber);

clear.addEventListener("click", () => {
    clearNum();
    calc = 0;
    smallText.textContent = calc;
})

numbers.forEach(blob => {
    blob.addEventListener("click",() => addNumber(blob.id))
});

additionButton.addEventListener("click", addition)

subtractionButton.addEventListener("click", subtraction)

multiplierButton.addEventListener("click", multiplication)

dividerButton.addEventListener("click", divide)

powerButton.addEventListener("click", power)

equals.addEventListener("click", () => {
    val = calc;
    p.textContent = val;
    smallText.textContent = ''
})
