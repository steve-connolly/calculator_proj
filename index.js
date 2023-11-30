let num1 = 1
let num2 = 2
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

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

}


//Could I use an if statement here: if sum is chosen then perform sum, else difference is chosen?






