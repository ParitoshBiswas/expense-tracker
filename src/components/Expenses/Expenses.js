import { useState } from 'react';  //REACT HOOK(useState)

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022'); //filteredYear -> variable itself(initial value)  setFilteredYear -> updating function(can be called to set new value)

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);             // updating function called(Expenses gets re-evaluated as well)
    }


    const filteredExpenses = props.items.filter((expense) => {
        return (
            expense.date.getFullYear().toString() === filteredYear
        )
      })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses}/>   
            </Card>
        </div>
    )                                      // component inside component(wrapper component).
}

export default Expenses;