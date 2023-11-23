const add=(a,b)=>a+b;
const subtract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;

let firstNum;
let secondNum;
let operator;

const operate=(operator,firstNum,secondNum)=>{
    if(operator==="+"){
        add(firstNum,secondNum);
    }
    if(operator==="-"){
        subtract(firstNum,secondNum);
    }
    if(operator==="*"){
        multiply(firstNum,secondNum);
    }
    if(operator==="/"){
        divide(firstNum,secondNum);
    }
}

