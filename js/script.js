const toggleInput = document.getElementById('pricing-toggle-input');
const priceValues = document.querySelectorAll('.price-value');
const toggleLabels = document.querySelectorAll('.pricing-toggle-label');

toggleInput.addEventListener('change', () => {
  const isAnnual = toggleInput.checked;
  
  priceValues.forEach(priceValue => {
    const annualPrice = priceValue.dataset.annual;
    const monthlyPrice = priceValue.dataset.monthly;
    
    priceValue.textContent = isAnnual ? annualPrice : monthlyPrice;
  });
  
  toggleLabels.forEach((label, index) => {
    if ((index === 0 && !isAnnual) || (index === 1 && isAnnual)) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });
});
