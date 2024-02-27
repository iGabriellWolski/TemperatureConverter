const btnForm = document.querySelectorAll(".js-btn").forEach((btns) => {
    btns.addEventListener("click", captureValue);
  });
  
  function captureValue() {
    var celsiusInputVlue = document.querySelector(".js-input-celsius").value;
    var fahrenheitInputVlue = document.querySelector(
      ".js-input-fahrenheit"
    ).value;
    if (isNaN(celsiusInputVlue) || isNaN(fahrenheitInputVlue)) {
      let resultCelsius = (document.querySelector(
        ".js-resultado-celsius"
      ).innerHTML = "Please enter the temperature in numbers");
  
      let resultFahrenheit = (document.querySelector(
        ".js-resultado-fahrenheit"
      ).innerHTML = "Please enter the temperature in numbers");
    } else {
      let resultFinalFahrenheit = (celsiusInputVlue * 9) / 5 + 32;
      let resultCelsius = (document.querySelector(
        ".js-resultado-celsius"
      ).innerHTML = `The conversion of ${celsiusInputVlue} Fahrenheit is ${resultFinalFahrenheit.toFixed(
        0
      )} `);
  
      let resultFinalCelsius = ((fahrenheitInputVlue - 32) * 5) / 9;
      let resultFahrenheit = (document.querySelector(
        ".js-resultado-fahrenheit"
      ).innerHTML = `The conversion of ${fahrenheitInputVlue} Fahrenheit is ${resultFinalCelsius.toFixed(
        0
      )}`);
    }
  }
  