let expression = ""

function appendNumber(number) {
    if (operator == null) alert("Number is missing"); 
    else if (number != "=") {
        expression = expression + number;
        document.getElementById("input").textContent = expression;
    } else if (number =="=") {
       document.getElementById("result").textContent = eval(expression);
       clearInput()  
    }
}

function calculate() {
    document.getElementById("output").textContent = eval(expression);
    clearInput();
}

function clearInput() {
    document.getElementById("input").textContent = "";
}     










