let firstOperand = '';
let secondOperand = '';
let operator = '';

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/'];
const clearButton = 'Clear';
const equalitySign = '=';
const decimalPoint = '.';

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.textContent;
        handle(value)
    })
})

function handle(value) {
    if (value === clearButton) {
        firstOperand = '';
        secondOperand = '';
        operator = '';
        display.textContent = '';
        return;
    }

    if (operator === '' && secondOperand === '' && (digits.includes(value) || value === decimalPoint)) {
        if (firstOperand === '') {
            firstOperand = value
        } else {
            firstOperand = firstOperand + value;
        }
        display.textContent = firstOperand;
        return;
    }

    if (firstOperand !== '' && secondOperand === '' && operator === '' && operators.includes(value)) {
        operator = value;
        display.textContent = '';
        return;
    }

    if (firstOperand !== '' && operator !== '' && (digits.includes(value) || value === decimalPoint)) {
        if (secondOperand === '') {
            secondOperand = value;
        } else {
            secondOperand = secondOperand + value;
        }
        display.textContent = secondOperand;
        return;
    }

    if (value === equalitySign && firstOperand !== '' && secondOperand !== '' && operator !== '') {
        if (operator === '/' && secondOperand === '0') {
            display.textContent = 'LOL';
        } else {
            display.textContent = operate(operator, firstOperand, secondOperand);
        }
        firstOperand = '';
        secondOperand = '';
        operator = '';
        return;
    }

    if (firstOperand !== '' && secondOperand !== '' && operator !== '' && operators.includes(value)) {
        firstOperand = operate(operator, firstOperand, secondOperand);
        display.textContent = firstOperand;
        secondOperand = ''
        operator = value;
        return;
    }
}


function operate(operator, firstOperand, secondOperand) {
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);
    switch (operator) {
        case '+':
            return add(firstOperand, secondOperand);
        case '-':
            return subtract(firstOperand, secondOperand);
        case '*':
            return multiply(firstOperand, secondOperand);
        case '/':
            return divide(firstOperand, secondOperand);
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return (x / y).toFixed(7);
}