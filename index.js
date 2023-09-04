const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const specialChars = ["*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  screen.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output);
  } else if (btnValue === "RESET") {
    output = "0";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  screen.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});




