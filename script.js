let display = document.querySelector('.display');
let keys = document.querySelectorAll('.key');
let clearButton = document.querySelector('.clear');

clearButton.onclick = function () {
    display.textContent = '';
}

for (let key of keys) {
    key.onclick = function () {
        display.textContent = display.textContent + key.textContent;
    }

}
