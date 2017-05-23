let display = "0"; // what is in display already
let saved = ""; //display before operation was pressed
let operation = 0; // *, /, +, -
const maxLength = 30; // max numbers in display

//  calculate, =
function calculate() {
    if (operation === "+"){
        display = parseInt(saved) + parseInt(display);
        document.Calculator.Display.value = display;
    }
    if (operation === "-"){
        display = parseInt(saved) - parseInt(display);
        document.Calculator.Display.value = display;
    }
    if (operation === "*"){
        display = parseInt(saved) * parseInt(display);
        document.Calculator.Display.value = display;
    }
    if (operation === "/"){
        if (display === "0"){
            display = "Can't divide by zero, ya dingus";
            document.Calculator.Display.value = display;
        }
        else {
            display = parseInt(saved) / parseInt(display);
            document.Calculator.Display.value = display;
        }
    }
}
//  decimal, do i need or can it just read the decimal?

//  add digit to display
function addDigit(input){
    if (display.length > maxLength){
        display = "Too many numbers you dingus";
    }
    else {
        if (display === "0"){
            display = input;
        }
        else {
            display = display + input;
        }
    }
    document.Calculator.Display.value = display;
}

//  change sign, +/-
function changeSign(){
    let sign = display.charAt(0);
    if (sign === "-"){
        display = display.substring(1);
    }
    else {
        display = "-" + display;
    }
    document.Calculator.Display.value = display;
}

//  clear, C
function clearDisplay(){
    display = "0";
    document.Calculator.Display.value = display;
}

//  all clear, AC
function allClear(){
    saved = "";
    display = "0";
    operation = 0;
    document.Calculator.Display.value = display;

}

//  mulitply, *
//  divide, /
//  add, +
//  subtract, - maybe do these 4 together?
function operate(op){
    if (op === "?"){
        display = "dunno what to use this button for yet";
        document.Calculator.Display.value = display;
    }
    else {
        saved = display;
        display = "0";
        operation = op;
        document.Calculator.Display.value = display;
    }
}

// var button = document.getElementById("numButton");
// button.addEventListener("click", function () {
//     console.log(this.value);
// });

