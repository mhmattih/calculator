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
/*
function displayCalculation(event){

    // A number was pressed 
    if (event.target.classList.contains("number") ){
        if (equalsPressedLast == true)
        {
            firstValue= "";
            secondValue="";
            operator="";
            valueString ="";
            calculation ="";
            equalsPressedLast = false;
        }
        valueString+=event.target.innerText;
        calculation+=event.target.innerText
        numberPressedLast = true;

    }
    // An operator was pressed && numberPressedLast == true;
    if (event.target.classList.contains("operator") && numberPressedLast){
        console.log("Operator pressed");

        if (firstValue !== ""){
            
            secondValue = Number(valueString);
            calculation = operate(firstValue,operator,secondValue);
            firstValue = calculation;
        }
        else
        {
            firstValue = Number(valueString);
        }

        operator = event.target.innerText;
        valueString="";
        calculation+=event.target.innerText
        numberPressedLast = false;
        operatorPressedLast = true;
        
    }
     // An equals was pressed && numberPressedLast == true
    if (event.target.id == 'equalsButton' && numberPressedLast && operatorPressedLast){
        secondValue = Number(valueString);
        calculation = operate(firstValue,operator,secondValue);
        firstValue = calculation;
        secondValue = "";
        operator = "";
        numberPressedLast = false;
        operatorPressedLast = false;
        equalsPressedLast = true;
    }

    displayResultMainDisplay(calculation);
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
    // event.target.classList.contains("number") <-- check is class included
}
// Add event listener to all buttons for clicking
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => button.addEventListener('click', displayCalculation));
*/
function displayResultMainDisplay(text){
    mainDisplay.textContent = text;
}

function clearMainDisplay(){
    mainDisplay.textContent = "";
    initializeCalculation();
}

function clearHistoryDisplay(){
    historyDisplay.textContent = "";
}

function initializeCalculation(){

    firstValue = "";
    firstValueNumber = 0;
    secondValue = "";
    secondValueNumber = 0;
    dotIncludedFirstValue = false;
    dotIncludedSecondValue = false;
    operator = "";
    calculationString = "";

}

function displayValue(event){

    if (operator == ""){

        // Not allowing another dot to be included in the value
        if (!(dotIncludedFirstValue == true && event.target.id == 'dotButton')){

            firstValue += event.target.innerText;
            firstValueNumber = Number(firstValue);
        }

        if (event.target.id == 'dotButton'){
            dotIncludedFirstValue = true;
        }

        console.log("value:",firstValue);
        console.log("valueNumber:",firstValueNumber);
        displayResultMainDisplay(firstValue);

    }
    else{
        // Not allowing another dot to be included in the value
        if (!(dotIncludedSecondValue == true && event.target.id == 'dotButton')){

            secondValue += event.target.innerText;
            secondValueNumber = Number(secondValue);
        }
        
        if (event.target.id == 'dotButton'){
            dotIncludedSecondValue = true;
        }
        
        console.log("value:",secondValue);
        console.log("valueNumber:",secondValueNumber);
        calculationString += event.target.innerText;
        displayResultMainDisplay(calculationString);
        
    }
    console.log("number pressed");
    console.log("firstValue:",firstValue);
    console.log("secondValue:",secondValue);
    console.log("operator:",operator);
    console.log("calculationString:",calculationString);

}

function displayCalculation(event){

    // operator can be pressed only once
    if (operator == "" && firstValue != ""){
        operator = event.target.innerText;
        calculationString += firstValue;
        calculationString += operator;
        displayResultMainDisplay(calculationString);
    }
    else if (firstValue != "" && operator != "" && secondValue != ""){
        console.log("Another operator");
        calculationString = "";
        firstValueNumber = Number(firstValue);
        secondValueNumber = Number(secondValue);
        firstValue = operate(firstValueNumber,operator,secondValueNumber);
        calculationString += firstValue;
        calculationString += event.target.innerText;
        displayResultMainDisplay(calculationString);
        secondValue = "";
        dotIncludedSecondValue = false;
        operator = event.target.innerText;

    }
    console.log("calc pressed");
    console.log("firstValue:",firstValue);
    console.log("secondValue:",secondValue);
    console.log("operator:",operator);
    console.log("calculationString:",calculationString);

}

function displayCalculationResult(event){

    if (firstValue != "" && secondValue != "" && operator != ""){
        console.log("Calculation can be done!");
        calculationString += event.target.innerText;
        firstValueNumber = Number(firstValue);
        secondValueNumber = Number(secondValue);
        calculationString += operate(firstValueNumber,operator,secondValueNumber);
        displayResultMainDisplay(calculationString);
    }
    console.log("= pressed");
    console.log("firstValue:",firstValue);
    console.log("secondValue:",secondValue);
    console.log("operator:",operator);
    console.log("calculationString:",calculationString);
    initializeCalculation();


}

const mainDisplay = document.querySelector('#mainDisplayFrame');
const historyDisplay = document.querySelector('#historyDisplayFrame');

let firstValue = "";
let firstValueNumber = 0;
let dotIncludedFirstValue = false;
let secondValue = "";
let secondValueNumber = 0;
let dotIncludedSecondValue = false;
let operator = "";
let calculationString = "";

const ceButton = document.querySelector('#ceButton');
ceButton.addEventListener('click',clearMainDisplay);

const chButton = document.querySelector('#chButton');
chButton.addEventListener('click',clearHistoryDisplay);

const equalsButton = document.querySelector('#equalsButton');
equalsButton.addEventListener('click',displayCalculationResult);

const valueButtons = Array.from(document.querySelectorAll('.valueButton'));
valueButtons.forEach((button) => button.addEventListener('click', displayValue));

const calcButtons = Array.from(document.querySelectorAll('.calcButton'));
calcButtons.forEach((button) => button.addEventListener('click', displayCalculation));

//eventListener for setting a value (+/- , 0 1 2 3 4 5 6 7 8 9 --> setValue)
//eventListener for calc-buttons (/ * - +  = --> displayCalculation)
//eventListener for CE 
//eventListener for CH

/*
global variables 
- let firstValue = 0;
- let secondValue = 0;
- let operator = "";

function initializeValues{
    firstValue = "";
    secondValue = "";
    operator = "";
}

*/