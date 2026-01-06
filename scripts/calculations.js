let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

let expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
]

for (let expense of expenseEntries) {
    totalExpensesValue += expense[1];
}

function calculateAverageExpense () {
    if (expenseEntries.length === 0){
        return 0;
    }
    return  totalExpensesValue / expenseEntries.length;
}

function calculateBalance () {
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor () {
    if (calculateBalance() < 0){
        balanceColor = "red";
    } else if (calculateBalance() < budgetValue * 0.25 ) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}

function calculateCategoryExpenses (category) {
    let categoriesTotals = 0;
    for(let entry of expenseEntries) {
        if (entry[0] === category){
            categoriesTotals += entry[1];
        }
    }
    return categoriesTotals
}

function calculateLargestCategory () {
    let categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
    let categoriesTotals = [];

    for(let category of categories){
        let total = calculateCategoryExpenses(category);
        categoriesTotals.push ([category, total]);
    }

    let largestCategory = categoriesTotals[0][0];
    let largestTotal = categoriesTotals[0][1];

    for(entry of categoriesTotals){
        if (entry[1] > largestTotal){
            largestTotal = entry[1];
            largestCategory = entry[0];
        }
    }
    return largestCategory;
}

function addExpenseEntry (array) {
    totalExpensesValue += array[1];
    expenseEntries.push (array);
}