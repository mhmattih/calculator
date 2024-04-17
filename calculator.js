function add(firstValue,secondValue){
    return firstValue + secondValue;
}

function subtract(firstValue,secondValue){
    return firstValue - secondValue;
}

function multiply(firstValue,secondValue){
    return firstValue * secondValue;
}

function divide(firstValue,secondValue){
    if (secondValue == 0){
        console.log("NOTICE! divide by 0");
        return NaN;
    }
    else
    {   
        return firstValue / secondValue;
    }

}

function checkValues(firstValue,secondValue){
    if (typeof firstValue === "number" && typeof secondValue === "number"){
        return true;
    }
    else 
    {
        return false;
    }   
}

function operate(firstValue,operator,secondValue){

    let returnValue;

    if (checkValues(firstValue,secondValue)){

        switch(operator){
            case '+':
                returnValue = add(firstValue,secondValue);
                break;
            case '-':
                returnValue = subtract(firstValue,secondValue);
                break;
            case '*':
                returnValue = multiply(firstValue,secondValue);
                break;
            case '/':
                returnValue = divide(firstValue,secondValue);
                break;
            default:
                console.log("Unknown operator");
        }
    }
    else
    {
        return NaN;
    }
    return returnValue;
}