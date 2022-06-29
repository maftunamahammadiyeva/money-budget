"use strict"

const elBudgetForm = document.querySelector(".budget-form");
const elBudgetInput = document.querySelector(".budget-input");
const elTextBudget = document.querySelector(".text-budget");
const elTextExpenses = document.querySelector(".text-expenses");
const elTextBalance = document.querySelector(".text-balance");

const elExpenseForm = document.querySelector(".expense-form");
const elExpenseInput = document.querySelector(".expense-input");
const elAmountInput = document.querySelector(".amount-input");
const elExpenseTitle = document.querySelector(".expence-title");
const elExpenseValue = document.querySelector(".expense-value");
const allBudget = [];
const allAmaount = []


elBudgetForm.addEventListener("submit", function (evt){
  evt.preventDefault()
  const budgetInputValue = elBudgetInput.value;
   allBudget.push(budgetInputValue*1)

   const imcreaseBudges = allBudget.reduce (function (acc, number){
    return acc + number
   })

  elTextBudget.textContent = `$ ${imcreaseBudges}`;

  elTextBalance.textContent = `$ ${imcreaseBudges}`;

})




elExpenseForm.addEventListener("submit", function (evt){
  evt.preventDefault();



  const expenseValue = elExpenseInput.value;
  const amountValue = elAmountInput.value;

  // const amoutArry = {
  //   id: allAmaount.length,
  //   title: expenseValue,
  //   number : amountValue
  // }

  allAmaount.push (amountValue*1)

  const amout = allAmaount.reduce (function(acc, num){
    return acc +num
  })

  const imcreaseBudges = allBudget.reduce (function (acc, number){
    return acc + number
   })

   elTextBalance.textContent= `$ ${imcreaseBudges - amout}`

  elTextExpenses.textContent = `$ ${amout}`

  const expensDesc = document.createElement ("p");
  const amountDesc = document.createElement ("p");


  expensDesc.textContent= expenseValue
  amountDesc.textContent = amountValue

  elExpenseTitle.appendChild(expensDesc)
  elExpenseValue.appendChild(amountDesc)


})
