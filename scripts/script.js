const values = [8, 12, 16, 24, 36];
const views = ['10K', '50K', '100K', '500K', '1M'];

let rangeInput = document.getElementById('rangeSlider');
let priceOutput = document.querySelector('.price');
const viewsOutput = document.querySelector('.pageviews');

rangeInput.addEventListener('input', function() {
  priceOutput.innerHTML = `$${values[rangeInput.value]}.00 <span>/ month</span>`;
  viewsOutput.innerHTML = `${views[rangeInput.value]} pageviews`;
});