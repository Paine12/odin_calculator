const bigText = document.querySelector(".scr-text")
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

let val

let x, y = null;


function delNumber () {
    x = null, y = null
    bigText.innerHTML = '0'
    smallText.innerHTML = '0'
    val = null
}

function clearNum () {
    x=null;
    bigText.innerHTML = '0'
}

function addition() {
    calc()
    smallText.innerHTML = `${y} +`
    bigText.innerHTML = ''
    val = "addition"
    x=null
}

function subtraction() {
    calc()
    smallText.innerHTML = `${y} -`
    bigText.innerHTML = ''
    val = "subtraction"
    x=null
}

function multiplication() {
    calc()
    smallText.innerHTML = `${y} *`
    bigText.innerHTML = ''
    val = "multiplication"
    x=null

}

function divide() {
    calc()
    smallText.innerHTML = `${y} /`
    bigText.innerHTML = ''
    val = "divide"
    x=null

}

function power() {
    calc()
    smallText.innerHTML = `${y} ^`
    bigText.innerHTML = ''
    val = "power"
    x=null
}

function calc() {
    if (val != null) {
        if (val == 'addition') {
            y += x
            bigText.innerHTML = y;
        }
        else if (val == 'subtraction') {
            y -= x
            bigText.innerHTML = y;

        }
        else if (val == 'multiplication') {
            y *= x
            bigText.innerHTML = y;
            
        }
        else if (val == 'divide') {
            y /= x
            bigText.innerHTML = y;
        
        }
        else if (val == 'power') {
            y = Math.pow(y, x)
            bigText.innerHTML = y;

        }
    }
    if (y == null) {
        smallText.innerHTML = x
        y = x
    }
    
    smallText.innerHTML = ''
    val = null
}



del.addEventListener("click", delNumber);

clear.addEventListener("click", clearNum)

numbers.forEach(blob => {
    blob.addEventListener("click",() => {
        if (x==null){
            x = parseInt(blob.id)
        }
        else x = x*10 + parseInt(blob.id)
        bigText.innerHTML = x
        console.log(x)
    })
});

additionButton.addEventListener("click", addition)

subtractionButton.addEventListener("click", subtraction)

multiplierButton.addEventListener("click", multiplication)

dividerButton.addEventListener("click", divide)

powerButton.addEventListener("click", power)

equals.addEventListener("click", calc)
