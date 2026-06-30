// make sure these match the HTML element names for the ID then class.
let input = document.querySelector("#name");
let display = document.querySelector(".displaymytext");
const name = input.value;

// This code should be working
input.addEventListener("input", function displayName(name) {
  const name = input.value;
  display.textContent = name;
});

// missing function?

// you should see 5 in the output of your console
function addNums(num1, num2) {
  return num1 + num2;
}

console.log(addNums(2, 3));
