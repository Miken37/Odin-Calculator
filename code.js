function add(num1, num2){
    screenDisplay.innerHTML = num1+num2;
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
    console.log(num1, operation, num2);
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
            console.log("Should never hit this tbh fam");
    }
}

function inputtedNumber(value){
    screenDisplay.innerHTML = value;
    num2 = num1;
    num1 = value;
}

//Turning buttons and screen display into variables in JS
let screenDisplay = document.querySelector(".screen");
let numButOne = document.querySelector(".numOne");
let numButTwo = document.querySelector(".numTwo");
let numButThree = document.querySelector(".numThree");
let numButFour = document.querySelector(".numFour");
let numButFive = document.querySelector(".numFive");
let numButSix = document.querySelector(".numSix");
let numButSeven = document.querySelector(".numSeven");
let numButEight = document.querySelector(".numEight");
let numButNine = document.querySelector(".numNine");
let numButZero = document.querySelector(".numZero");

let operateBtn = document.querySelector(".equal");
let plusBtn = document.querySelector(".plus");

let num1 = 0;
let num2 = 0;
let operation = "null";

console.log(num1, operation, num2,);

numButOne.addEventListener("click", () => {inputtedNumber(1)});

plusBtn.addEventListener("click", () => {operation = "+"});

operateBtn.addEventListener("click", () => {operate(operation, num1, num2)})

