let expression = "";

function appendNumber(number) {
    if ( number == null) 
        {alert("Number is missing"); } 
    else if (number === "=") {
        calculate();
    } else {
       expression = expression + number;
        document.getElementById("expression").innerHTML = expression;
       clearInput()  
    }  
}  

function calculate() {
    let result = eval(expression);
    expression = result;
    document.getElementById("expression").innerHTML = result;
}

function clearInput() {
    expression = "";
    document.getElementById("expression").innerHTML = "";
}   














