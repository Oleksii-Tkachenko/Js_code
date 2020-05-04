let startCalculation = document.getElementById('start'),
    budget = document.querySelectorAll('.budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value'),
    input = document.getElementsByClassName("expenses-item"),
    approve = document.getElementsByClassName("expenses-item-btn"),
    calculate = document.getElementsByClassName("optionalexpenses-btn"),
    countBudgetBtn= document.getElementsByClassName("count-budget-btn"),
    optExp = document.querySelectorAll(".optionalexpenses-item"),
    additionalIncome = document.querySelector(".choose-income"),
    checkBox = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

let money, time, mandatoryExpances = 0;


startCalculation.addEventListener("click", function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budget[0].textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

approve[0].addEventListener("click", function(){
    let sum = 0;
    if (appData.budget >0) {
        for (let i = 0; i < input.length; i++) {
            let a = input[i].value,
                b = input[++i].value;
            
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length <50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                alert("Введите значение!");
                i--;
            }
        }
        budget[3].textContent = sum;
        mandatoryExpances = sum;
    }
});

calculate[0].addEventListener("click", function() {
    if (appData.budget >0) {
        for (let i = 0; i < optExp.length; i++) {
            let opt = optExp[i].value;
            appData.optionalExpanses[i] = opt;
            budget[4].textContent += appData.optionalExpanses[i] + " ";
        }     
    }
});

countBudgetBtn[0].addEventListener("click", function() {
    if (appData.budget >0) {
        if (appData.budget != undefined) {
        
            appData.moneyPerDay = ((appData.budget - mandatoryExpances) / 30).toFixed();
            budget[1].textContent = appData.moneyPerDay;
    
            if(appData.moneyPerDay < 100) {
                budget[2].textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
                budget[2].textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                budget[2].textContent = "Высокий уровень достатка";
            } else {
                budget[2].textContent = "Произошла ошибка";
            }
        } else {
            budget[1].textContent = "Произошла ошибка";
        }
    }
});

additionalIncome.addEventListener("input", function() {
    let items = additionalIncome.value;
    appData.income = items.split(', ');
    budget[5].textContent = appData.income;
});

checkBox.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener("input", function() {
    if (appData.savings == true) {
        let s = +sum.value,
            p = +percent.value;
    
        appData.monthIncome = s/100/12*p;
        appData.yearIncome = s/100*p;

        budget[6].textContent = appData.monthIncome.toFixed(1);
        budget[7].textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener("input", function() {
    if (appData.savings == true) {
        let s = +sum.value,
            p = +percent.value;

        appData.monthIncome = s/100/12*p;
        appData.yearIncome = s/100*p;

        budget[6].textContent = appData.monthIncome.toFixed(1);
        budget[7].textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    expenses: {},
    optionalExpanses: {},
    income: [],
    timeData: time,
    savings: false
}






// let k = 0;
// while (k<2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = +prompt("Во сколько обойдется?", '');

// if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && a != '' && b != '' && a.length <50) {
//     console.log("done");
//     appData.expenses[a] = b;
//     k++;
// } else {
//     console.log("not done");
//     alert("Введите значение!");
//     k--;
// }
// };


// do {let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = +prompt("Во сколько обойдется?", '');

// if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
// && a != '' && b != '' && a.length <50) {
// console.log("done");
// appData.expenses[a] = b;
// k++;
// } else {
// console.log("not done");
// alert("Введите значение!");
// k--;
// }
// }
// while (k<2);