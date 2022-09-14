const calculateExpense = () => {
  const income = document.getElementById("income").value;
  const food = document.getElementById("food").value;
  const rent = document.getElementById("rent").value;
  const clothes = document.getElementById("clothes").value;
  // console.log(income , food , rent,  clothes );

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    // return expense ;
    // console.log(expense);

  // calculate balance
  const balance = parseFloat(income) - expense;
  console.log(balance);
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
  const savePercentageInt = parseFloat(savePercentage);
//   Validate saving percentage value
  if (savePercentageInt < 0) {
    alert("Provide positive saving value");
  }
  const balance = document.getElementById("balance").innerText;
  const savingAmount = balance - (savePercentageInt / 100) * balance ;

  // calculate remaining balance
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = remainingBalance;
    document.getElementById("remaining-balance").innerText = savingAmount;
  }
};
