import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [{
  id: 'e1',
  title: 'Gpu Emi',
  amount: 48.92,
  date: new Date(2022, 8, 29)
},
{
  id: 'e2',
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14)
},
{
  id: 'e3',
  title: 'New TV',
  amount: 799.49,
  date: new Date(2021, 2, 12)
},
{
  id: 'e4',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28)
},
{
  id: 'e5',
  title: 'New LG Monitor',
  amount: 185,
  date: new Date(2022, 9, 2)
},
{
  id: 'e6',
  title: 'Wireless Mice',
  amount: 99,
  date: new Date(2022, 10, 16)
}];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return ([expense, ...prevExpenses]);
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;