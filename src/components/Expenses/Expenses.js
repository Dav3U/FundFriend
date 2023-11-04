import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [yearChoice, setyearChoice] = useState("2023");

  const saveYearHandler = (expenseYear) => {
    console.log(expenseYear);
    setyearChoice(expenseYear);
    // props.onUpdateYear(expenseYear);
  };

 const filterYear = (data) => {
    return data.date.getFullYear().toString() ===  yearChoice  
  };

const filteredExpenses = props.items.filter(filterYear);


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={yearChoice} onSaveYear={saveYearHandler} />
    <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;