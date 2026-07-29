const display = document.getElementById("display") as HTMLInputElement;

let currentExpression = "";

// Adding a number
function addValue(value: string): void {
  currentExpression += value;
  updateDisplay();
}

// Add an operator
function setOperator(operator: string): void {
  if (currentExpression === "") return;

  currentExpression += operator;
  updateDisplay();
}

// Calculate the result
function calculate(): void {
  if (currentExpression === "") return;

  currentExpression = eval(currentExpression).toString();
  updateDisplay();
}

// Clear the calculator
function clearDisplay(): void {
  currentExpression = "";
  updateDisplay();
}

// Update the display
function updateDisplay(): void {
  display.value = currentExpression;
}

// Expose functions to HTML
(window as any).addValue = addValue;
(window as any).setOperator = setOperator;
(window as any).calculate = calculate;
(window as any).clearDisplay = clearDisplay;