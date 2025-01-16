
function onpageload(){
console.log("page loaded")

//get budget expenditure balance tags 
const display_budget = document.getElementById("display_budget")
const display_expenditure = document.getElementById("display_expenditure")
const display_balance = document.getElementById("display_balance")

//get budget expenditure balance data from local storage
const get_budget = localStorage.getItem("budget") || "0"
const get_expenditure = localStorage.getItem("expenditure") || "0"
const get_balance = get_budget - get_expenditure 

//display budget expenditure balance values 
display_budget.innerText = get_budget
display_expenditure.innerText = get_expenditure
display_balance.innerText = get_balance



//get all the expense data
let get_all_expense = localStorage.getItem("all-expense") 


//convert json string to object 
 get_all_expense = JSON.parse(get_all_expense) || [];
 console.log(get_all_expense[0])
get_all_expense.map((x,index)=>{
console.log(index)

const create_row = document.createElement("tr");

const create_cell1 = document.createElement("td")
create_cell1.innerHTML = x.expense_category
create_cell1.classList.add("table_row_cell");
create_row.append(create_cell1);

const create_cell2 = document.createElement("td")
create_cell2.innerHTML = x.expense_amount
create_cell2.classList.add("table_row_cell");
create_row.append(create_cell2);

const create_cell3 = document.createElement("td")
create_cell3.innerHTML = x.expense_date
create_cell3.classList.add("table_row_cell");
create_row.append(create_cell3);

const create_cell4 = document.createElement("button")
create_cell4.innerHTML = "remove"
create_cell4.classList.add("table_row_cell");
create_row.append(create_cell4);

create_cell4.addEventListener("click", () => {
    
    create_row.remove();
 get_all_expense.pop(index)
    localStorage.setItem("all-expense",JSON.stringify(get_all_expense))
   
});
    const expenseTableBody = document.getElementById("expense_body");
    expenseTableBody.append(create_row);

})




}
function setbudget(){
    const budget_input = document.getElementById("budget_input")
    console.log(budget_input.value) // get value from input field
    localStorage.setItem("budget",budget_input.value) // save budget value to local storage
    budget_input.value=""
    onpageload()
}
function setexpenselist(){
    const category_input = document.getElementById("category_input")
    const amount_input = document.getElementById("amount_input")
    const date_input = document.getElementById("date_input")
    
    const expense_data = {
        "expense_category":category_input.value,
        "expense_amount":amount_input.value,
        "expense_date":amount_input.value,
    }

    let all_expense_data = localStorage.getItem("all-expense")
    all_expense_data = all_expense_data ? JSON.parse(all_expense_data) : [];  //ternary conditon ? if true use this : if false use this json parse Converts a JavaScript Object Notation (JSON) string into an object.
    all_expense_data.push(expense_data);
    
    localStorage.setItem("all-expense",JSON.stringify(all_expense_data)) //Converts a JavaScript value to a JavaScript Object Notation (JSON) string.


    console.log(category_input.value)
    category_input.value=""
    console.log(amount_input.value)
    amount_input.value=""
    console.log(date_input.value)
    date_input.value=""
    onpageload()
}