document.querySelector('.submit').onclick = function () {
    alert('Заяка отпрвлена!');
}
var inputs = [].slice.call(document.querySelectorAll('input[type="text"]')),
    button = document.querySelector('.submit');
inputs.forEach(function (el) {
    el.addEventListener('input', checkInputs, false);
});
function checkInputs() {
    var empty = inputs.filter(function (el) {
        return el.value.trim() === '';
    }).length;
    button.disabled = empty !== 0;
}
checkInputs();