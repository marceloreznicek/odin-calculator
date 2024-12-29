// main

// define main elements to access
elScreen = document.querySelector("#screen")
elScreen.textContent = ""

buttons = document.querySelectorAll(".button-number")
buttons.forEach(button => button.addEventListener("click", (e) => recordNumber(e.target.textContent)))

function recordNumber(value) {
    console.log(value)
    elScreen.textContent = elScreen.textContent + value
}

