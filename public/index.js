console.log("halloooo");

const inputField = document.querySelector(".search-form__input");

// write API in event listener
inputField.addEventListener("input", event => {
  console.log("event is heard");
  let query = new XMLHttpRequest();
  let inputText = inputField.value;
  query.onload = () => {
    if (query.status === 200) {
      // let result = query.responseText;
      // DOM population function goes here
      console.log("The DOM will now be populated with returned information");
    } else {
      console.log(`Error, status is: ${query.status}`);
    }
  };
  query.open("GET", "/search", true);
  query.send();
});
