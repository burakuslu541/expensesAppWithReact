import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import React from "react";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Masraf Bulunamadi.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;

// {
//   /*---------------- if ile yapımı(en temiz yolu) -------------------*/
// }
// {
//   /*expensesContent;*/
// }
// {
//   /*----------------- ikiden fazla koşul varsa ------------------*/
// }
// {
//   /* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
//   {filteredExpenses.length > 0 &&
//     filteredExpenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         date={expense.date}
//         amount={expense.amount}
//       />
//     ))} */
// }
// {
//   /*---------------------- turner operatörü ile --------------------*/
// }
// {
//   /* {filteredExpenses.length === 0 ? (
//     <p>No expenses found.</p>
//   ) : (
//     filteredExpenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         date={expense.date}
//         amount={expense.amount}
//       />
//     ))
//   )} */
// }
