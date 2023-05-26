function changeCategory() {
  var category = document.getElementById("category").value;

  // Show all converter sections
  var converters = document.getElementsByClassName("converter");
  for (var i = 0; i < converters.length; i++) {
    converters[i].style.display = "none";
  }

  // Show the selected converter section
  var selectedConverter = document.getElementById(category + "Converter");
  if (selectedConverter) {
    selectedConverter.style.display = "block";
  }
}

function convertLength() {
  var input = document.getElementById("lengthInput").value;
  var unit = document.getElementById("lengthUnit").value;
  var result = document.getElementById("result");

  if (unit === "m") {
    result.innerHTML = input + " meters is equal to:";
    result.innerHTML += "<br>" + input * 100 + " centimeters";
    result.innerHTML += "<br>" + input * 39.37 + " inches";
    result.innerHTML += "<br>" + input * 3.281 + " feet";
  } else if (unit === "cm") {
    result.innerHTML = input + " centimeters is equal to:";
    result.innerHTML += "<br>" + input / 100 + " meters";
    result.innerHTML += "<br>" + input / 2.54 + " inches";
    result.innerHTML += "<br>" + input / 30.48 + " feet";
  } else if (unit === "in") {
    result.innerHTML = input + " inches is equal to:";
    result.innerHTML += "<br>" + input * 2.54 + " centimeters";
    result.innerHTML += "<br>" + input / 39.37 + " meters";
    result.innerHTML += "<br>" + input / 12 + " feet";
  } else if (unit === "ft") {
    result.innerHTML = input + " feet is equal to:";
    result.innerHTML += "<br>" + input * 30.48 + " centimeters";
    result.innerHTML += "<br>" + input * 12 + " inches";
    result.innerHTML += "<br>" + input / 3.281 + " meters";
  }
}

function convertTime() {
  var input = document.getElementById("timeInput").value;
  var unit = document.getElementById("timeUnit").value;
  var result = document.getElementById("result");

  if (unit === "s") {
    result.innerHTML = input + " seconds is equal to:";
    result.innerHTML += "<br>" + input / 60 + " minutes";
    result.innerHTML += "<br>" + input / 3600 + " hours";
    result.innerHTML += "<br>" + input / 86400 + " days";
  } else if (unit === "min") {
    result.innerHTML = input + " minutes is equal to:";
    result.innerHTML += "<br>" + input * 60 + " seconds";
    result.innerHTML += "<br>" + input / 60 + " hours";
    result.innerHTML += "<br>" + input / 1440 + " days";
  } else if (unit === "hr") {
    result.innerHTML = input + " hours is equal to:";
    result.innerHTML += "<br>" + input * 3600 + " seconds";
    result.innerHTML += "<br>" + input * 60 + " minutes";
    result.innerHTML += "<br>" + input / 24 + " days";
  } else if (unit === "day") {
    result.innerHTML = input + " days is equal to:";
    result.innerHTML += "<br>" + input * 86400 + " seconds";
    result.innerHTML += "<br>" + input * 1440 + " minutes";
    result.innerHTML += "<br>" + input * 24 + " hours";
  }
}

function convertTemperature() {
  var input = document.getElementById("temperatureInput").value;
  var unit = document.getElementById("temperatureUnit").value;
  var result = document.getElementById("result");

  if (unit === "c") {
    result.innerHTML = input + " degrees Celsius is equal to:";
    result.innerHTML += "<br>" + ((input * 9) / 5 + 32) + " degrees Fahrenheit";
    result.innerHTML += "<br>" + (parseFloat(input) + 273.15) + " Kelvin";
  } else if (unit === "f") {
    result.innerHTML = input + " degrees Fahrenheit is equal to:";
    result.innerHTML += "<br>" + ((input - 32) * 5) / 9 + " degrees Celsius";
    result.innerHTML += "<br>" + (((input - 32) * 5) / 9 + 273.15) + " Kelvin";
  } else if (unit === "k") {
    result.innerHTML = input + " Kelvin is equal to:";
    result.innerHTML += "<br>" + (input - 273.15) + " degrees Celsius";
    result.innerHTML += "<br>" + (((input - 273.15) * 9) / 5 + 32) + " degrees Fahrenheit";
  }
}

function convertVolume() {
  var input = document.getElementById("volumeInput").value;
  var unit = document.getElementById("volumeUnit").value;
  var result = document.getElementById("result");

  if (unit === "l") {
    result.innerHTML = input + " liters is equal to:";
    result.innerHTML += "<br>" + input * 1000 + " milliliters";
    result.innerHTML += "<br>" + (input / 3.785) + " gallons";
    result.innerHTML += "<br>" + (input * 33.814) + " ounces";
  } else if (unit === "ml") {
    result.innerHTML = input + " milliliters is equal to:";
    result.innerHTML += "<br>" + input / 1000 + " liters";
    result.innerHTML += "<br>" + (input / 3785) + " gallons";
    result.innerHTML += "<br>" + (input / 29.574) + " ounces";
  } else if (unit === "gal") {
    result.innerHTML = input + " gallons is equal to:";
    result.innerHTML += "<br>" + (input * 3.785) + " liters";
    result.innerHTML += "<br>" + (input * 3785) + " milliliters";
    result.innerHTML += "<br>" + (input * 128) + " ounces";
  } else if (unit === "oz") {
    result.innerHTML = input + " ounces is equal to:";
    result.innerHTML += "<br>" + (input / 33.814) + " liters";
    result.innerHTML += "<br>" + (input * 29.574) + " milliliters";
    result.innerHTML += "<br>" + (input / 128) + " gallons";
  }
}

function convertArea() {
  var input = document.getElementById("areaInput").value;
  var unit = document.getElementById("areaUnit").value;
  var result = document.getElementById("result");

  if (unit === "sqm") {
    result.innerHTML = input + " square meters is equal to:";
    result.innerHTML += "<br>" + (input * 10.764) + " square feet";
    result.innerHTML += "<br>" + (input / 4046.856) + " square miles";
    result.innerHTML += "<br>" + (input * 0.000247) + " acres";
  } else if (unit === "sqft") {
    result.innerHTML = input + " square feet is equal to:";
    result.innerHTML += "<br>" + (input / 10.764) + " square meters";
    result.innerHTML += "<br>" + (input / 43560) + " acres";
    result.innerHTML += "<br>" + (input / 27878400) + " square miles";
  } else if (unit === "sqmi") {
    result.innerHTML = input + " square miles is equal to:";
    result.innerHTML += "<br>" + (input * 2.59) + " square kilometers";
    result.innerHTML += "<br>" + (input * 640) + " acres";
    result.innerHTML += "<br>" + (input * 27878400) + " square feet";
  } else if (unit === "acre") {
    result.innerHTML = input + " acres is equal to:";
    result.innerHTML += "<br>" + (input * 4046.856) + " square meters";
    result.innerHTML += "<br>" + (input * 43560) + " square feet";
    result.innerHTML += "<br>" + (input / 640) + " square miles";
  }
}

function convertWeight() {
  var input = document.getElementById("weightInput").value;
  var unit = document.getElementById("weightUnit").value;
  var result = document.getElementById("result");

  if (unit === "kg") {
    result.innerHTML = input + " kilograms is equal to:";
    result.innerHTML += "<br>" + (input * 1000) + " grams";
    result.innerHTML += "<br>" + (input * 2.205) + " pounds";
    result.innerHTML += "<br>" + (input * 35.274) + " ounces";
  } else if (unit === "g") {
    result.innerHTML = input + " grams is equal to:";
    result.innerHTML += "<br>" + (input / 1000) + " kilograms";
    result.innerHTML += "<br>" + (input / 454) + " pounds";
    result.innerHTML += "<br>" + (input / 28.35) + " ounces";
  } else if (unit === "lb") {
    result.innerHTML = input + " pounds is equal to:";
    result.innerHTML += "<br>" + (input / 2.205) + " kilograms";
    result.innerHTML += "<br>" + (input * 454) + " grams";
    result.innerHTML += "<br>" + (input * 16) + " ounces";
  } else if (unit === "oz") {
    result.innerHTML = input + " ounces is equal to:";
    result.innerHTML += "<br>" + (input / 35.274) + " kilograms";
    result.innerHTML += "<br>" + (input * 28.35) + " grams";
    result.innerHTML += "<br>" + (input / 16) + " pounds";
  }
}
