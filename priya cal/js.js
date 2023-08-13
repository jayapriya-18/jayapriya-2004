// script.js
let displayValue = '';
let shouldClearDisplay = false;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0';
}

function appendToDisplay(value) {
    if (shouldClearDisplay) {
        displayValue = '';
        shouldClearDisplay = false;
    }
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
    } catch (error) {
        displayValue = 'Error';
    }
    shouldClearDisplay = true;
    updateDisplay();
}
