const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value === "Error") {
    clearDisplay(); // Si oui, effacer le display
  }
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
