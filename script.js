// main
// define main variables

let firstNumber = undefined
let secondNumber = undefined
let operator = undefined
let resultNumber = undefined
let blnShowingResult = false

// define main elements to access
elScreen = document.querySelector("#screen")
elScreen.textContent = ""

//setup buttons
let buttons = document.querySelectorAll(".button-number")
buttons.forEach(button => button.addEventListener("click", (e) => recordNumber(e.target.textContent)))

let operatorButtons = document.querySelectorAll(".button-operator")
operatorButtons.forEach(button => button.addEventListener("click", (e) => recordOperator(e.target.textContent)))

// indiviual behavior buttons
document.querySelector("#button-ac").addEventListener("click", () => resetParameters())
document.querySelector("#button-equal").addEventListener("click", () => calculateResult())
document.querySelector("#button-equal").addEventListener("click", () => calculateResult())



function recordNumber(value) {

    console.log(value)
    blnShowingResult = false //resets this to avoid calculating with the wrong value

    if (operator !== undefined) {
        if (secondNumber === undefined) {
            secondNumber = value}
        else {
            secondNumber = secondNumber + value
        }
    } else {
        if (firstNumber === undefined) {
            firstNumber = value}
        else {
            firstNumber = firstNumber + value
        }
    }
    updateScreen()
}


function recordOperator(value) {
    if (firstNumber === undefined && !blnShowingResult) return
    if (blnShowingResult) firstNumber = resultNumber

    console.log(value)
    operator = value

    updateScreen()
}

function updateScreen(result) {
    let finalText = ""

    if(firstNumber !== undefined) finalText = firstNumber
    if(operator !== undefined) finalText = finalText + " " + operator
    if(secondNumber !== undefined) finalText = finalText + " " + secondNumber

    elScreen.textContent = finalText
}

function calculateResult() {

    if(firstNumber === undefined || secondNumber === undefined || operator === undefined) return

    let a = Number(firstNumber)
    let b = Number(secondNumber)

    switch (operator) {
        case "+": resultNumber = a + b 
            break
        case "-": resultNumber = a - b
            break
        case "*": resultNumber = a * b
            break
        case "/": resultNumber = a / b
            break
    }

    elScreen.textContent = resultNumber
    blnShowingResult = true

    firstNumber = undefined
    secondNumber = undefined
    operator = undefined
}

function resetParameters () {
    firstNumber = undefined
    secondNumber = undefined
    operator = undefined
    resultNumber = undefined
    blnShowingResult = false

    updateScreen()
}


