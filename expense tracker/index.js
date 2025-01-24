
/* 
1.1 
 - select budgetInput as id 
 - check if greater than 0 
 - save it to local storage 
 - call onPageLoad and resetInput function
*/
function setBudget() {

}
/*
1.2
 - using inputId parameter change the value
*/
function resetInput(inputId) {

}

function displayData() {
  /*
  1.3
 - select displayBudget as id 
 - get value from local storage 
 - use innertext to update value
 - call displayData inside the onPageLoad function
  */


  /*1.10
 - read expenseAll value from localstorage
 - map through all the value and use the sum of amountInput value as totalExpenditure
 - select displayExpenditure by id and update it value to totalExpenditure
 - select displayBalance by id and update the value using innerText
*/

}
function onPageLoad() {
  //1.3 call displayData()

  //1.5 call inputDate()
  
  // 1.7 call displayExpenseList()

}
/*
1.4
 - select categoryInput,amountInput,dateInput as id
 - check if amount is greater than 0 and other input fields have value
 - create a json object with name expenseListData
 - create a new varible expenseListLocalStorage to read data from local storage
 - save data to database
 - reset values of input fields using resetInput()
 - call clearDisplaylist and onPageLoad
*/
function setExpense() {

}
/*
1.5
 - it is used to disable user from selecting future dates
 - we use inbuild Date function to get todays date
 - use .setAttribute to change max value user can select to today
 - call it inside the onPageLoad function
*/
function inputDate() {
  // const date = new Date();
  // const todayDate = date.getDate();
  // const todayMonth = String(date.getMonth() + 1).padStart(2, "0");
  // const todayYear = date.getFullYear();
  // const fullDate = `${todayYear}-${todayMonth}-${todayDate}`;
  // const inputdate = document.getElementById("dateInput");
  // inputdate.setAttribute("max", fullDate);
}

/*
1.6
 - get value of all the expense stored in localstorage
 - call clearDisplayList
 - we map all the values to read them one by one
 - create a new row,cell,button using .createElement 
 - use addRowCell function to create the cells
 - add an event listener on the button you created
 - when clicked remove that data and save it to localstorage
 - appened the row you just created to the existing table with id expense_body
 */
function displayExpenseList() {

}
/*
1.7
 - use .createElement to create a new cell("td") 
 - changes it value using innerText
*/
function addRowCell(rowCellValue, mainRow) {

}

/*
1.8
 - select the table by using the id expense_body and change its value
*/
function clearDisplayList() {

}
// 1.10 go to displayData function