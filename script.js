const add=(a,b)=>a+b;
const subtract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;

let previousNum="";
let currentNum="";
let operator="";

const operate=(operator,firstNum,secondNum)=>{
    if(operator==="+"){
        return add(firstNum,secondNum);
    }
    if(operator==="-"){
        return subtract(firstNum,secondNum);
    }
    if(operator==="x"){
        return multiply(firstNum,secondNum);
    }
    if(operator==="/"){
        return divide(firstNum,secondNum);
    }
}

const numbers=document.querySelectorAll(".num");
const operators=document.querySelectorAll(".operator");
const equal=document.querySelector(".equal");
const period=document.querySelector(".period");
const clear=document.querySelector(".clear");
const mainDisplay=document.querySelector(".main-display");
const secondaryDisplay=document.querySelector(".secondary-display");

clear.addEventListener("click",()=>{
    previousNum="";
    currentNum="";
    operator="";
    mainDisplay.innerHTML=0;
    secondaryDisplay.innerHTML="";
});

numbers.forEach(number=>{
    number.addEventListener("click",(e)=>{
        if(currentNum.length<10){
            currentNum+=e.target.innerHTML;
            mainDisplay.innerHTML=currentNum;
        }
    });
});

operators.forEach(Op=>{
    Op.addEventListener("click",(e)=>{
        if(currentNum!==""){
        if(previousNum===""){
            previousNum=currentNum;
        }
        else{
            previousNum=operate(operator,+previousNum,+currentNum);
            operator=e.target.innerHTML;
        }
        }
        else{
            currentNum=previousNum;
            operator=e.target.innerHTML;
            previousNum=operate(operator,+previousNum,+currentNum);
        }
        operator=e.target.innerHTML;
        currentNum="";
        mainDisplay.innerHTML=previousNum;
        secondaryDisplay.innerHTML=previousNum+" "+operator;
    });
});

equal.addEventListener("click",()=>{
    if(currentNum!==""){
        previousNum=operate(operator,+previousNum,+currentNum);
        secondaryDisplay.innerHTML+=" "+currentNum+" =";
        }
    mainDisplay.innerHTML=previousNum;
});

period.addEventListener("click",()=>{
    if(currentNum.charAt(currentNum.length-1)!=="."){
    currentNum+=".";
    mainDisplay.innerHTML=currentNum;
    }
});





