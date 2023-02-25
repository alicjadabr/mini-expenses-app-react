import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterYearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredItems = props.data.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSaveExpensesYear={filterYearChangeHandler}
      />
      <ExpensesChart expenses={filteredItems}/>
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
