import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const mount = props.date.toLocaleString("tr-TR", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("tr-TR", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{mount}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
export default ExpenseDate;
