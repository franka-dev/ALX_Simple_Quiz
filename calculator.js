// Step 1: Define arithmetic functions
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
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Step 2: Handle click events for each operation
document.getElementById('add').addEventListener('click', function() {
    calculate(add);
});

document.getElementById('subtract').addEventListener('click', function() {
    calculate(subtract);
});

document.getElementById('multiply').addEventListener('click', function() {
    calculate(multiply);
});

document.getElementById('divide').addEventListener('click', function() {
    calculate(divide);
});

// Step 3: Main calculate function
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = operation(num1, num2);
    document.getElementById('calculation-result').textContent = result;
}
