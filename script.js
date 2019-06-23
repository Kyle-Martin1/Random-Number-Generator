
document.querySelector('.numberGenerator').addEventListener('click', function() {

  //// Set minimum and maximum numbers
  var minEntry = parseInt(document.querySelector('.minimumNumber').value);
  var maxEntry = parseInt(document.querySelector('.maximumNumber').value);


  //// Create variable with random number from given range
  var randomNumber = Math.floor(Math.random() * (maxEntry - minEntry + 1) + minEntry);

  //// Display randomly generated number
  document.querySelector('.number').textContent = randomNumber;
  
});
