function add(num_1, num_2){
    let resultNum = num_1+num_2;
    screenDisplay.innerHTML = resultNum;
    num2 = resultNum;
    console.log(resultNum);
}

function subtract(num_1, num_2){
    let resultNum = num_1-num_2;
    screenDisplay.innerHTML = resultNum;
    num2 = resultNum;
    console.log(resultNum);
}

function multiply(num_1, num_2){
    let resultNum = num_1*num_2;
    screenDisplay.innerHTML = resultNum;
    num2 = resultNum;
    console.log(resultNum);
}

function divide(num_1, num_2){
    let resultNum = num_1/num_2;
    screenDisplay.innerHTML = resultNum;
    num2 = resultNum;
    console.log(resultNum);
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
            console.log("Cleared and didn't choose operator between numbers");
    }
}

function equalOperate(finalOp, num1, num2){
    stringCount = 0;
    num1 = num2;
    num2 = +screenDisplay.innerHTML;
    operate(finalOp, num1, num2);
}

function selectedOperator(selectedOp){
    operation = selectedOp;
    let value = +screenDisplay.innerHTML;
    num1 = num2;
    num2 = value;
    if (stringCount >= 1){
        operate(operation, num1, num2);
    }
    stringCount++;
    newValue = true;
}

function inputtedNumber(value){
    console.log(operation);
    if (newValue == true){
        screenNums = [];
        screenNums.push(value);
        screenDisplay.innerHTML = screenNums.join("");
        newValue = false;

    } else{
    screenNums.push(value);
    screenDisplay.innerHTML = screenNums.join("");
    }
}

function clear(){
    screenDisplay.innerHTML = 0;
    num1=0;
    num2=0;
    operation="null";
    screenNums = [];
    stringCount = 0;
} //If stringing, need to store result into num1

function randomImg(){
    let numOfPics = 2;
    let rngNum = Math.floor(Math.random()*numOfPics);
    let containerClass = document.querySelector(".calculator-container");

    containerClass.style.backgroundImage = `url(afro${rngNum}.png)`;
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
let minusBtn = document.querySelector(".minus");
let multBtn = document.querySelector(".mult");
let diviBtn = document.querySelector(".divi");

let clearBtn = document.querySelector(".clear");

//Global variables for calculations
let stringCount = 0;
let isStringing = false;
let newValue = false;
let num1 = 0;
let num2 = 0;
let operation = "null";
let screenNums = [];

console.log(num1, operation, num2,);

numButOne.addEventListener("click", () => {inputtedNumber(1)});
numButTwo.addEventListener("click", () => {inputtedNumber(2)});
numButThree.addEventListener("click", () => {inputtedNumber(3)});
numButFour.addEventListener("click", () => {inputtedNumber(4)});
numButFive.addEventListener("click", () => {inputtedNumber(5)});
numButSix.addEventListener("click", () => {inputtedNumber(6)});
numButSeven.addEventListener("click", () => {inputtedNumber(7)});
numButEight.addEventListener("click", () => {inputtedNumber(8)});
numButNine.addEventListener("click", () => {inputtedNumber(9)});
numButZero.addEventListener("click", () => {inputtedNumber(0)});

clearBtn.addEventListener("click", () => {clear()})

plusBtn.addEventListener("click", () => {selectedOperator("+")});
minusBtn.addEventListener("click", () => {selectedOperator("-")});
multBtn.addEventListener("click", () => {selectedOperator("*")});
diviBtn.addEventListener("click", () => {selectedOperator("/")});


operateBtn.addEventListener("click", () => {equalOperate(operation, num1, num2)})

randomImg();

let testBtn = document.querySelector(".tests");
testBtn.addEventListener("click", () => {console.log(`Num1 = ${num1}, Num2 = ${num2} StringCount = ${stringCount}`)});