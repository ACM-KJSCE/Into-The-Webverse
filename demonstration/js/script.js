const button1 = document.getElementById("change-btn");
const button2 = document.getElementById("reverse-btn");
const contentBox = document.getElementById("content-box");

button1.onclick = function () {
  contentBox.innerHTML = "The content has been changed! 🎉";
};

button2.onclick = function () {
  contentBox.innerHTML = "Click the button button to change this text! ";
};

const updateId = document.getElementById("updateId");
const updateClass = document.getElementsByClassName("updateClass")[0];
const updateBoth = document.querySelector("#updateBoth"); //const updateBoth = document.querySelector(".updateBoth")
updateId.addEventListener("click", () => {
  updateId.innerText = `Updated using .getElementById("updateId") `;
  updateId.style = " background-color: #2196f3;";
});
updateClass.addEventListener("click", () => {
  updateClass.innerText = `Updated using .getElementsByClassName("updateClass")[0] `;
  updateClass.style = " background-color: #2196f3;";
});
updateBoth.addEventListener("click", () => {
  updateBoth.innerText = `Updated using .querySelector("#updateBoth") `;
  updateBoth.style = " background-color: #2196f3;";
});
function showInnerhtml() {
  const explainInnerhtml = document.getElementById("explainInnerhtml");
  const inputValue = document.getElementById("inputValue");
  let displayValue = inputValue.value;
  explainInnerhtml.innerHTML = displayValue;
  inputValue.value = "";
}

const clickmebutton = document.getElementById("clickmebutton");
clickmebutton.addEventListener("click", () => {
  alert("hello everyone welcome to Into The Webverse");
});
