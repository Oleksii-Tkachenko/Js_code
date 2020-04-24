let buget = prompt("Ваш бюджет на месяц?");
let timeData = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    buget,
    timeData,
    expenses : {},
    income : [],
    savings : false
};

let monthExpansesName1 = prompt("Введите обязательную статью расходов в этом месяце");
let monthExpanses1 = prompt("Во сколько обойдется?");
let monthExpansesName2 = prompt("Введите обязательную статью расходов в этом месяце");
let monthExpanses2 = prompt("Во сколько обойдется?");

var expenses = {};

expenses.monthExpansesName1 = monthExpanses1;
expenses.monthExpansesName2 = monthExpanses2;

let dayBuget = 0;

dayBuget = (buget - monthExpanses1 - monthExpanses2) / 30
alert(dayBuget);
console.log(buget);
console.log(appData);
console.table(expenses);
console.table(dayBuget);