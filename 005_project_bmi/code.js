const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  }
  if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>your bmi is under weight ${bmi}</span>`;
    } else if (bmi <= 24.89) {
      results.innerHTML = `<span>your bmi is normal weight ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>your bmi is over weight ${bmi}</span>`;
    }
  }

  // results.innerHTML = `${weight}`;
});
