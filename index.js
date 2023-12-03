let num1 = ""
let num2 = ""
let operator = ""

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

function display() {
    document.getElementById("num1").textContent = num1
    document.getElementById("num2").textContent = num2
    document.getElementById("operator").textContent = operator
    document.getElementById("result").textContent = calculate()
}

function one() {
    appendNumber(1)
}

function two() {
    appendNumber(2)
}

function appendNumber(number) {
    if (operator === "") {
        num1 += number;
    } else {
        num2 += number;
    }
    display();
}

function add() {
    operator = "+"
    display()
}

function subtract() {
    operator = "-"
    display()
}

function calculate() {
    if (num1 !== "" && num2 !== "")
    switch(operator) {
        case "+":
            return parseFloat(num1) + parseFloat(num2);
        case "-":
            return parseFloat(num1) - parseFloat(num2);
        default:
            break;
}     
}









