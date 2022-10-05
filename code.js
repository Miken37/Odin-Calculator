function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operation, num1, num2){
    switch(operation){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1,num2);
        default:
            console.log("Invalid");
    }
}

function inputtedNumber(value){
    screenDisplay.innerHTML = value;
}

let screenDisplay = document.querySelector(".screen");
let numButOne = document.querySelector(".numOne");
numButOne.addEventListener("click", () => {inputtedNumber(1)});



