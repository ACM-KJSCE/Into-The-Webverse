// Get the button and the content box elements
const button1 = document.getElementById("change-btn");
const button2 = document.getElementById("reverse-btn");
const contentBox = document.getElementById("content-box");

// Add an onclick event listener to the button


button1.onclick = function () {
    contentBox.innerHTML = "The content has been changed! 🎉";
};

button2.onclick = function () {
    contentBox.innerHTML = "Click the button button to change this text! ";
};


