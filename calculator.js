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

function displayAction(event){
    console.log("button clicked!,",event.target.id);

    // A number was pressed
    /*
    if (pressedButtonIsNumber(event.target.id)){
        
    }*/
    clickedItems+=event.target.innerText;

    displayResultMainDisplay(clickedItems);
    // 1. Enter first value of the calculation (can contain many numbers)
    // 2. When an operand is pressed first value can be converted to as firstValue
    // 3. Only one operand is allowed
    // 4. Second value can be entered and after the equals button or other operand is 
    // pressed second value can be converted as secondValue and calculation is executed 
    // and displayed main display and in history display.
    // if other operand was pressed, sum of the calculation will be used as firstValue of 
    // following calculation

    // event.target.innerText <-- text from button
    // event.target.id <--id of button
}

function displayResultMainDisplay(text){
    console.log("Add text:",text);
    mainDisplay.textContent = text;
}
/*
function pressedButtonIsNumber(buttonid){
    

    return true;
}*/


const mainDisplay = document.querySelector('#mainDisplayFrame');
let calculation = [];
let clickedItems ="";

// Add event listener to all buttons for clicking
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => button.addEventListener('click', displayAction));
