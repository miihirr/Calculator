const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let previousNum = "";
let currentNum = "";
let operator = "";

function roundNum(num){
    return Math.round(num*1000000)/1000000;
}

const operate = (operator, firstNum, secondNum) => {
    if (operator === "+") {
        return roundNum(add(firstNum, secondNum));
    }
    if (operator === "-") {
        return roundNum(subtract(firstNum, secondNum));
    }
    if (operator === "x") {
        return roundNum(multiply(firstNum, secondNum));
    }
    if (operator === "/") {
        if (secondNum === 0) {
            return "ERROR";
        }
        return roundNum(divide(firstNum, secondNum));
    }
}

const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const period = document.querySelector(".period");
const clear = document.querySelector(".clear");
const mainDisplay = document.querySelector(".main-display");
const secondaryDisplay = document.querySelector(".secondary-display");

function clean() {
    previousNum = "";
    currentNum = "";
    operator = "";
    mainDisplay.innerHTML = "0";
    secondaryDisplay.innerHTML = "";
}

clear.addEventListener("click", clean);

function handleNum(num) {
    if (currentNum.length < 10) {
        currentNum += num;
    }
}

function updateMainDisplay(num) {
    mainDisplay.innerHTML = num;
}

function updateSecondaryDisplay(num) {
    secondaryDisplay.innerHTML = num;
}

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        handleNum(e.target.innerHTML);
        updateMainDisplay(currentNum);
    });
});

function handleOperator(op) {
    if (currentNum !== "") {
        if (previousNum === "") {
            previousNum = currentNum;
        }
        else {
            previousNum = operate(operator, +previousNum, +currentNum);
        }
        operator = op;
        updateMainDisplay(previousNum);
        updateSecondaryDisplay(previousNum + " " + operator + " ");
        currentNum = "";
    }
    else {
        currentNum = previousNum;
        operator = op;
        previousNum = operate(operator, +previousNum, +currentNum);
        updateMainDisplay(previousNum);
        updateSecondaryDisplay(currentNum + " " + operator + " " + currentNum + " =");
        currentNum = "";
    }
}

operators.forEach(Op => {
    Op.addEventListener("click", (e) => {
        handleOperator(e.target.innerHTML);
    });
});

equal.addEventListener("click", () => {
    if (currentNum !== "" && previousNum !== "") {
        updateSecondaryDisplay(previousNum + " " + operator + " " + currentNum + " = ");
        previousNum = operate(operator, +previousNum, +currentNum);
        updateMainDisplay(previousNum);
    }
});

period.addEventListener("click", () => {
    if (currentNum.charAt(currentNum.length - 1) !== ".") {
        currentNum += ".";
        updateMainDisplay(currentNum);
    }
});















