const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const evaluator = document.querySelector('.evaluator');

const output = document.querySelector('.output');
const operations = document.querySelector('.operations');
const symbols = ['-', '+', '*', '/'];
let lastPressedType = null;

window.onload = function() {
    toggleButtons();
}

buttons.forEach(button => button.addEventListener("click", function (e) {
    const button = e.target;
    lastPressedType = button.className;
    const symbol = button.id;
    output.innerHTML = output.innerHTML + symbol;
    toggleButtons();
    if (lastPressedType == "evaluator") {
        evaluateExpression();
    }
}))

function toggleButtons() {
    buttons.forEach(button => button.disabled = false)
    if (lastPressedType == "operator" || lastPressedType == null) {
        operators.forEach(operator => operator.disabled = true)
        evaluator.disabled = true;
    }
    return;
}

function evaluateExpression() {
    let evaluated = output.innerHTML.slice(0, -1);
    output.innerHTML = eval(evaluated);
}
