function onPageLoad() {
  displayData();
  inputDate();
  displayExpenseList();
}

function setBudget() {
  const budgetInput = document.getElementById("budgetInput");
  if (budgetInput.value > 0) {
    localStorage.setItem("budget", budgetInput.value);
    resetInput("budgetInput");
    clearDisplayList();
    onPageLoad();
  } else {
    alert("enter budget greater than 0");
  }
}

function displayData() {
  // displays all the data on website
  displayBudget = document.getElementById("displayBudget");
  const budgetValue = localStorage.getItem("budget"); // read data from local storage
  displayBudget.innerText = budgetValue; // use .innerText to change value

  let getExpense = localStorage.getItem("expenseAll");
  getExpense = JSON.parse(getExpense);
  let totalExpenditure = 0;
  const displayExpenditure = document.getElementById("displayExpenditure");
  clearDisplayList();
  getExpense.map((data) => {
    totalExpenditure += Math.abs(parseInt(data.amountInput));
  });
  displayExpenditure.innerText = totalExpenditure || 0; // it can break if sum of all amount is more than 10^21 or approx ig can add a check and disable user from adding more expense too much complication

  let displayBalance = document.getElementById("displayBalance");
  let balanceValue = budgetValue - totalExpenditure;
  displayBalance.innerText = balanceValue;
}

function setExpense() {
  const categoryInput = document.getElementById("categoryInput");
  const amountInput = document.getElementById("amountInput");
  const dateInput = document.getElementById("dateInput");
  if (amountInput.value > 0) {
    if (categoryInput.value && amountInput.value && dateInput.value) {
      // to check if all the input fields are not empty
      const expenseListData = {
        // create dic to store data
        categoryInput: categoryInput.value,
        amountInput: amountInput.value,
        dateInput: dateInput.value,
      };

      let expenseListLocalStorage = localStorage.getItem("expenseAll"); // we get the old data(if any) from local storage
      expenseListLocalStorage = expenseListLocalStorage
        ? JSON.parse(expenseListLocalStorage)
        : []; //ternary conditon ? if true use this : if false use this json parse Converts a JavaScript Object Notation (JSON) string into an object.
      expenseListLocalStorage.push(expenseListData); // add value of expense to the main expense list
      localStorage.setItem(
        "expenseAll",
        JSON.stringify(expenseListLocalStorage)
      ); // save updated expense value to local storage

      resetInput("categoryInput");
      resetInput("amountInput");
      resetInput("dateInput");

      clearDisplayList(); // clear old data in table
      onPageLoad();
    }
  } else {
    alert("enter amount greater than 0");
  }
}

function inputDate() {
  const date = new Date();
  const todayDate = date.getDate();
  const todayMonth = String(date.getMonth() + 1).padStart(2, "0");
  const todayYear = date.getFullYear();
  const fullDate = `${todayYear}-${todayMonth}-${todayDate}`;
  const inputdate = document.getElementById("dateInput");
  inputdate.setAttribute("max", fullDate);
}

function displayExpenseList() {
  let getExpense = localStorage.getItem("expenseAll");
  getExpense = JSON.parse(getExpense);
  getExpense.map((data, index) => {
    const create_row = document.createElement("tr");
    addRowCell(data.categoryInput, create_row);
    addRowCell(data.amountInput, create_row);
    addRowCell(data.dateInput, create_row);

    const buttonRowCell = document.createElement("button");
    buttonRowCell.innerHTML = "Remove";
    create_row.append(buttonRowCell);

    buttonRowCell.addEventListener("click", () => {
      let expenseData = getExpense;
      expenseData.splice(index, 1); // remove 1 item at index
      localStorage.setItem("expenseAll", JSON.stringify(expenseData));
      onPageLoad();
    });

    const expenseTableBody = document.getElementById("expense_body");
    expenseTableBody.append(create_row); // adding the newley created row to existing table
  });
}

function addRowCell(rowCellValue, mainRow) {
  const createRowCell = document.createElement("td");
  createRowCell.innerHTML = rowCellValue;
  mainRow.append(createRowCell);
}

function resetInput(inputId) {
  const inputField = document.getElementById(inputId);
  inputField.value = "";
}

function clearDisplayList() {
  const expenseTableBody = document.getElementById("expense_body");
  expenseTableBody.innerHTML = "";
  const displayExpenditure = document.getElementById("displayExpenditure");
  displayExpenditure.innerText = "";
}