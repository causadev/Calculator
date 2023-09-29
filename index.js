// Initialize variables to store calculator state
let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";
// Select DOM elements
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const backSpace = document.querySelector(".delete");
// Add event listeners to number buttons
numbers.forEach((number) => number.addEventListener("click", appendNumbers));
// Add event listeners to operator buttons
operators.forEach((op) => op.addEventListener("click", setOperation));
// Add event listener to the equals button
equals.addEventListener("click", evaluate);
// Add event listener to the clear button
clear.addEventListener("click", clearDisplay);
// Add event listener to the decimal button
decimal.addEventListener("click", appendDecimal);
// Add event listener to the backspace button
backSpace.addEventListener("click", deleteNumber);

// Function to round result
function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

// Function to delete numbers
function deleteNumber() {
  display.textContent = display.textContent.toString().slice(0, -1);
  if (display.textContent === "") {
    clearDisplay();
  }
}

// Function to append decimal point
function appendDecimal() {
  if (displayValue === "") {
    displayValue = "0";
  }
  if (!display.textContent.includes(".")) {
    displayValue += ".";
    display.textContent = displayValue;
  }
}

// Function to clear the calculator display and state
function clearDisplay() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  displayValue = "";
}

// Function to evaluate and display the result
function evaluate() {
  if (firstNumber === "") return; // Don't perform calculation if firstNumber is empty
  if (operator === "÷" && display.textContent === "0") {
    return (display.textContent = "lol🤣");
  }
  secondNumber = displayValue; // Set the second number to the current display value
  display.textContent = roundResult(
    operate(firstNumber, operator, secondNumber)
  ); // Perform the calculation and display the result
  firstNumber = ""; // Clear the first number
  displayValue = ""; // Clear the display value
}

// Function to set the operator and update firstNumber
function setOperation(e) {
  if (firstNumber !== "") evaluate(); // If there's a first number, evaluate the expression
  firstNumber = displayValue; // If there's a first number, evaluate the expression
  operator = e.target.textContent; // Set the first number to the current display value
  firstNumber = display.textContent; // Set the operator based on the button clicked
  displayValue = ""; // Clear the display value
}

// Append numbers to display
function appendNumbers(e) {
  if (displayValue === "0") {
    clearDisplay(); // Clear display if it contains only "0"
  }
  displayValue += e.target.textContent; // Append the clicked number to the display value
  display.textContent = displayValue; // Update the display
}

// Function to perform arithmethic operations
function operate(n1, operator, n2) {
  n1 = Number(n1);
  n2 = Number(n2);
  if (operator === "+") {
    return add(n1, n2);
  } else if (operator === "-") {
    return subtract(n1, n2);
  } else if (operator === "x") {
    return multiply(n1, n2);
  } else if (operator === "÷") {
    if (n2 === 0) {
      return null; // Handle division by zero
    }
    return divide(n1, n2);
  } else {
    return null; // Invalid operator
  }
}

// Basic arithmethic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
