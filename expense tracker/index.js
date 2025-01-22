function onPageLoad() {
  displayData();
  inputDate();
  displayExpenseList();
}
 // set max date length of today so user cannot select future date as expense date 
 // we use inbuild date function to get todays date and edit the max attribute on input (type date) using .setAttribute

//Create a function setBudget to set the budget and save it in local storage add checking of negative numbers
function setBudget() {
  
}

//Create a function displayData to display the budget, expenditure and balance
function displayData() {  
  
}

// Create a function setexpense to add new expense in local storage
function setExpense() { 
  const categoryInput = document.getElementById("categoryInput");
  const amountInput = document.getElementById("amountInput");
  const dateInput = document.getElementById("dateInput");
  
}


function inputDate() {
   //1.1 Make a function called inputDate and take only earlier dates
}



function displayExpenseList() {//Make an expenseList (table)  using data from loacalstorage and createElement 
    //Add rows to the table using .createElement
    //Category , Amount , Expenditure

    


    //Create a button to remove the row data when remove button is clicked and .addEventListener for click
    

    expenseTableBody.append(create_row); // adding the newley created row to existing table
  
}


  // Create a function addRowCell using .createElement("td") and appende it to mainRow
  function addRowCell(rowCellValue, mainRow) {
  }

  //Create a function resetInput which takes an id as parameter use it to reset value of input fields
  function resetInput(inputId) {
 
  }

 //Create a function to reset values in expense_body,displayExpenditure
function clearDisplayList() {
  
}










