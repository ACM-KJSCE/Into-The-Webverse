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

  // const displayBudget = document.getElementById("displayBudget");
  // const budgetValue = localStorage.getItem("budget");
  // displayBudget.innerText = budgetValue;


  /*1.10
 - read expenseAll value from localstorage
 - map through all the value and use the sum of amountInput value as totalExpenditure
 - select displayExpenditure by id and update it value to totalExpenditure
 - select displayBalance by id and update the value using innerText
*/
  // let getExpense = localStorage.getItem("expenseAll");
  // getExpense = JSON.parse(getExpense);
  // let totalExpenditure = 0;
  // const displayExpenditure = document.getElementById("displayExpenditure");
  // getExpense.map((data) => {
  //   totalExpenditure += parseInt(data.amountInput);
  // });
  // displayExpenditure.innerText = totalExpenditure || 0;

  // let displayBalance = document.getElementById("displayBalance");
  // let balanceValue = budgetValue - totalExpenditure;
  // displayBalance.innerText = balanceValue || 0;
}
function onPageLoad() {
  //1.3 call displayBudgetData()

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

  // const categoryInput = document.getElementById("categoryInput");
  // const amountInput = document.getElementById("amountInput");
  // const dateInput = document.getElementById("dateInput");


  // if (amountInput.value > 0) {
  //   if (categoryInput.value && amountInput.value && dateInput.value) {


      // const expenseListData = {
      //   categoryInput: categoryInput.value,
      //   amountInput: amountInput.value,
      //   dateInput: dateInput.value,
      // };

      // let expenseListLocalStorage = localStorage.getItem("expenseAll");
      // expenseListLocalStorage = expenseListLocalStorage ? JSON.parse(expenseListLocalStorage) : [];
      // expenseListLocalStorage.push(expenseListData);
      // localStorage.setItem("expenseAll",JSON.stringify(expenseListLocalStorage));

      // resetInput("categoryInput");
      // resetInput("amountInput");
      // resetInput("dateInput");
      // clearDisplayList();
      // onPageLoad();


  //   }
  // } else {
  //   alert("enter amount greater than 0");
  // }
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

  // let getExpense = localStorage.getItem("expenseAll");
  // getExpense = JSON.parse(getExpense);
  // clearDisplayList();

  // getExpense.map((data, index) => {

  //   const create_row = document.createElement("tr");
  //   addRowCell(data.categoryInput, create_row);
  //   addRowCell(data.amountInput, create_row);
  //   addRowCell(data.dateInput, create_row);

  //   const buttonRowCell = document.createElement("button");
  //   buttonRowCell.innerHTML = "Remove";
  //   create_row.append(buttonRowCell);

  //   buttonRowCell.addEventListener("click", () => {
  //     getExpense.splice(index, 1);
  //     localStorage.setItem("expenseAll", JSON.stringify(getExpense));
  //     onPageLoad();
  //   });

  //   const expenseTableBody = document.getElementById("expense_body");
  //   expenseTableBody.append(create_row);
  // });
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