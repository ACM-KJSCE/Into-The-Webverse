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
    
    
    // const aa = display_expense.split("||")
    // console.log(aa)
    // const somearr = []
    // aa.map((x)=>somearr.push(x))
    // console.log(somearr)
    // const expensedisplaylist = document.getElementById("list-container")
    // // aa.map((x)=> expensedisplaylist.append(document.createElement("div").innerText = x.split("*")) )
    // // somearr.map((x)=> expensedisplaylist.append(document.createElement("div","hh")))
    // somearr.map((x) => {
    //     const div = document.createElement("div");
    //     div.innerHTML =x;
    //     div.classList.add("hh");
    //     expensedisplaylist.append(div);
    // });
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
        // let getdata_allexpense = JSON.parse(getdata_allexpense_local)
        // if (!getdata_allexpense){
        //     getdata_allexpense =[]
        // }
        // console.log(typeof(all_expense))
        // let obj0 = localStorage.getItem("test") 
        // const obj1 = {
        //     "1":"a",
        //     "2":"b"
        // }
        // const obj2 = {
        //     "11":"a",
        //     "22":"b"
        // }
        // obj0 = {...obj2}
        // obj0 = obj0 ? JSON.parse(obj0) : [];
        // obj0.push(all_expense);
        getdata_allexpense_local = getdata_allexpense_local ? JSON.parse(getdata_allexpense_local) : [];
        getdata_allexpense_local.push(all_expense);
     
     
      
    
        localStorage.setItem("all-expense",JSON.stringify(getdata_allexpense_local))
        // console.log(getdata_allexpense)
        // localStorage.setItem("all-expense",JSON.stringify(getdata_allexpense))
    
        // let get_all_expense = localStorage.getItem("all-expense") 
        // if (!get_all_expense){
        //     get_all_expense = {}
        // }
        // get_all_expense =  
    
        
        // // console.log(get_expensetype_value,get_expensevalue_value)
        // // const all_expense = get_all_expense + "["+ get_expensetype_value +","+ get_expensevalue_value+"] || ";
        // // // const all_expense = [ get_all_expense ? "["+ get_expensetype_value +","+ get_expensevalue_value+"]" : "["+ get_expensetype_value +","+ get_expensevalue_value+"]" ]
        // localStorage.setItem("all-expense",JSON.stringify(get_all_expense))
        
        
        onpageload()
    
    }