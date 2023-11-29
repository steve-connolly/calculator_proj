let num1 = 1
let num2 = 2
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
let sumEl = document.getElementById("sum-el")




function add() {
    let sum = num1 + num2
    sumEl.textContent = "Sum: " + sum
}

let differenceEl = document.getElementById("difference-el")

function subtract() {
    let difference = num1 - num2
    differenceEl.textContent = "Difference: " + difference
}

function result() {
}//Could I use an if statement here: if sum is chosen then perform sum, else difference is chosen?

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"




