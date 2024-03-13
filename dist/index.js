document.addEventListener("DOMContentLoaded", function () {
  var countElement = document.querySelector(".count-animate");

  var targetNumber = 4000;
  var currentNumber = 0;
  var increment = Math.ceil(targetNumber / 100);

  var interval = setInterval(function () {
    countElement.textContent = currentNumber.toLocaleString() + "+";

    if (currentNumber >= targetNumber) {
      clearInterval(interval);
    }

    currentNumber += increment;
  }, 10);
});

document.addEventListener("DOMContentLoaded", function () {
  function countUp(elementSelector, targetNumber, suffix = "", delay = 100) {
    var countElement = document.querySelector(elementSelector);
    var currentNumber = 0;
    var increment = Math.ceil(targetNumber / 10);

    var interval = setInterval(function () {
      countElement.textContent = currentNumber.toLocaleString() + suffix;

      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      }

      currentNumber += increment;
    }, delay);
  }
  countUp(".count-patients", 200, "");
  countUp(".count-hearts", 20, "");
  countUp(".count-doctors", 10, "K");
  countUp(".count-works", 900, "");
});
