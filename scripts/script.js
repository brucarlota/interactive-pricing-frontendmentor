const values = [8, 12, 16, 24, 36];
const views = ['10K', '50K', '100K', '500K', '1M'];

let rangeInput = document.getElementById('rangeSlider');
let priceOutput = document.querySelector('.price');
const viewsOutput = document.querySelector('.pageviews');

rangeInput.addEventListener('input', () => {
  const value = this.value * 25;
  priceOutput.innerHTML = `$${values[rangeInput.value]}.00 <span>/ month</span>`;
  viewsOutput.innerHTML = `${views[rangeInput.value]} pageviews`;

  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #ECF0FB ${value}%, #ECF0FB 100%)`;
});