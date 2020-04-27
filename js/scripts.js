let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpanses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpanses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');
            
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length <50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("not done");
                alert("Введите значение!");
                i--;
            }
        }
    },
    detectDayBudget : function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel : function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings : function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses : function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Введите необязательную статью расходов в этом месяце", '');
            appData.optionalExpenses[i] = opt;
        }              
    },
    chooseIncome : function() {
        let items = prompt("Что принесёт дополнительный доход? (перечислите через запятую)", "");
        for (let i = 0; i < 1; i++) {
            if ( (typeof(items)) === 'string' && (typeof(items)) != null  && items != '' && items.length <50) {
            console.log("done");
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то ещё?", ""));
            appData.income.sort();
            } else {
            console.log("not done");
            alert("Введите значение!");
            i--;
            }
        }
        let incomeString;
        appData.income.forEach(function(item, i, income) {
            incomeString += (i+1) + "-" + item + ", ";
            }    
        );
        console.log("Способы доп. заработка: ", incomeString);
    }
};

for (let item in appData) {           
    if (typeof(appData[item]) == Object) {
        for(let itemX in appData[item]) {
            console.log(itemX, "-", appData[item][itemX]);
        }
    }
    console.log(item, "-", appData[item]);
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