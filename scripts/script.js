let values = [8, 12, 16, 24, 36];

let rangeInput = document.getElementById('rangeSlider');
let priceOutput = document.querySelector('.price');

rangeInput.addEventListener('input', function() {
  priceOutput.innerHTML = `$${values[rangeInput.value]}.00 <span>/ month</span>`;
});