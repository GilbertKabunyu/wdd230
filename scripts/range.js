const rangevalue = document.getElementById("rangeValue");
const range = document.getElementById("r");

range.addEventListener('change', displayRange);
range.addEventListener('input', displayRange);

function displayRange() {
    rangevalue.innerHTML = range.value;
}