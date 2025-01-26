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




//const
// const a = 10
// a =11
// console
//let

//var



const updateId = document.getElementById("updateId")
const updateClass = document.getElementsByClassName("updateClass")[0]
const updateBoth = document.querySelector("#updateBoth") //const updateBoth = document.querySelector(".updateId")
updateId.addEventListener("click",()=>{
    updateId.innerText=`Updated using .getElementById("updateId") `
})
updateClass.addEventListener("click",()=>{
    updateClass.innerText=`Updated using .getElementsByClassName("updateClass")[0] `
})
updateBoth.addEventListener("click",()=>{
    updateBoth.innerText=`Updated using .querySelector("#updateBoth") `
})
function showInnerhtml(){


const explainInnerhtml = document.getElementById("explainInnerhtml")
const inputValue = document.getElementById("inputValue")
let displayValue = inputValue.value
explainInnerhtml.innerHTML = displayValue

}

const clickmebutton = document.getElementById("clickmebutton")
clickmebutton.addEventListener("click",()=>{
    alert("hello everyone welcome to Into The Webverse")
})


function onPageLoad(){

}

/*
const let var difference, functions
querySelector
innerHTML
DOM Manipulation
Event Listners

*/