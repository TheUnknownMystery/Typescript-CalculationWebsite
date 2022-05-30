var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var button = document.getElementById('submit-btn');
var resultDiv = document.getElementsByClassName('result');
var addNumbers = function (a, b) { return a + b; };
var validateNumbers = function (a, b) {
    if (a === 0 || b === 0) {
        return 'Number Cant be Zero';
    }
    if (!a || !b) {
        return 'Numbers are required';
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Please Enter Numbers';
    }
    return 'correct';
};
button.addEventListener('click', function () {
    if (validateNumbers(Number(input1.value), Number(input2.value)) === 'correct') {
        console.log("".concat(input1.value, " + ").concat(input2.value, " = ").concat(addNumbers(Number(input1.value), Number(input2.value))));
        resultDiv[0].innerHTML += "<p>".concat(input1.value, " + ").concat(input2.value, " = ").concat(addNumbers(Number(input1.value), Number(input2.value)), "</p>");
        return;
    }
    alert(validateNumbers(Number(input1.value), Number(input2.value)));
});
