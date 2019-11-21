const inputBox = document.querySelector("#inputBox");
const datalist = document.querySelector("#suggestions");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.getElementById("clearButton");
const body = document.getElementsByTagName("body");

clearButton.onclick = function clearResults(event) {
  event.preventDefault();
  let defaultArray = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure"
  ];

  inputBox.value = "";

  while (datalist.firstChild) {
    datalist.removeChild(datalist.firstChild);
  }

  defaultArray.forEach(x => {
    let colorOption = document.createElement("option");
    colorOption.classList.add("color");
    colorOption.value = x;
    datalist.appendChild(colorOption);
  });
};
console.log(inputBox.value);

// update option dropdown element for colors
function updateResults(result) {
  // clear all current dropdown options
  while (datalist.firstChild) {
    datalist.removeChild(datalist.firstChild);
  }
  // grab colors from passed result object
  let colors = Object.keys(result);
  // add new dropdown options upon search
  colors.forEach((x, i) => {
    let colorOption = document.createElement("option");
    colorOption.classList.add("color");
    colorOption.value = x;
    datalist.appendChild(colorOption);
  });
}
