let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

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

let productEl = document.getElementById("product-el")

function multiply() {
    let product = num1 * num2
    productEl.textContent = "Product: " + product
}

let quotientEl = document.getElementById("quotient-el")

function divide() {
    let quotient = num1 / num2
    quotientEl.textContent = "Quotient: " + quotient
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"




