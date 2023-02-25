import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    formVisibilityHandler();
  };

  const [formVisibility, setFormVisibility] = useState(false);

  const formVisibilityHandler = () => setFormVisibility((prev) => !prev);

  return (
    <div className="new-expense">
      {!formVisibility && (
        <button onClick={formVisibilityHandler}>Dodaj wydatek</button>
      )}
      {formVisibility && (
        <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        formToggle={formVisibilityHandler}
      />
      )}
    </div>
  );
};

export default NewExpense;
