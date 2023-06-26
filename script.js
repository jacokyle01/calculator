const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');

buttons.forEach(button => button.addEventListener("click", function (e) {
    const button = e.target;
    const symbol = button.id;
    output.innerHTML = output.innerHTML + symbol;
}))