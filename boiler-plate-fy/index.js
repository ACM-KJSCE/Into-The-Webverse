

function onpageload(){
const get_display_budget = document.getElementById("bdgt")
const get_display_expense = document.getElementById("expns")
const get_display_balance = document.getElementById("blnc")

const display_budget = localStorage.getItem("total-budget")
const display_expense = localStorage.getItem("all-expense")
const display_balance = localStorage.getItem("balance")


get_display_budget.innerText=display_budget
get_display_expense.innerText=display_expense
get_display_balance.innerText=display_balance

const a = JSON.parse(display_expense)
const expensedisplaylist = document.getElementById("list-container")
console.log(a)
a.map((x)=>{
    const div = document.createElement("div");
    div.innerHTML =x.expensetype +" " + x.expensevalue;
    div.classList.add("hh");
    expensedisplaylist.append(div);}
)


const get_budget = document.getElementById("total-amt")
get_budget.value=""


}
function setbudget(){
    const get_budget = document.getElementById("total-amt")
    const get_budget_value = get_budget.value
    console.log(get_budget_value)
    localStorage.setItem("total-budget",get_budget_value)
    
    onpageload()

}
function setexpense(){
    const get_expensetype = document.getElementById("product-name")
    const get_expensevalue = document.getElementById("product-amt")
    const get_expensetype_value = get_expensetype.value
    const get_expensevalue_value = get_expensevalue.value

    const all_expense = {
       "expensetype" : get_expensetype_value,
       "expensevalue":get_expensevalue_value

    }
    
    let getdata_allexpense_local = localStorage.getItem("all-expense") 

    getdata_allexpense_local = getdata_allexpense_local ? JSON.parse(getdata_allexpense_local) : [];
    getdata_allexpense_local.push(all_expense);
 
 
  

    localStorage.setItem("all-expense",JSON.stringify(getdata_allexpense_local))

    
    
    onpageload()

}