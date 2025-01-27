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


<<<<<<< HEAD


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
    updateId.style=" background-color: #2196f3;"
})
updateClass.addEventListener("click",()=>{
    updateClass.innerText=`Updated using .getElementsByClassName("updateClass")[0] `
    updateClass.style=" background-color: #2196f3;"
})
updateBoth.addEventListener("click",()=>{
    updateBoth.innerText=`Updated using .querySelector("#updateBoth") `
    updateBoth.style=" background-color: #2196f3;"
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



const var1 = 10;
var1 = 11;
let vaar2  = 20;
vaar2 = 10;
var num1 = 10;
var num1  = 5;

function onPageLoad(){

}

/*
const let var difference, functions
querySelector
innerHTML
DOM Manipulation
Event Listners

*/
=======
>>>>>>> 2186cd9a1e56651a2be8e7955543ad2936b1265a
