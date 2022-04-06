const addition = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

const numbers = Array.from(document.getElementsByClassName("btn"));
const display = document.querySelector(".screen");
console.log(numbers, display);

numbers.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "CLEAR":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
