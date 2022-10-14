import { useState } from 'react';  //REACT HOOK(useState)

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020'); //filteredYear -> variable itself(initial value)  setFilteredYear -> updating function(can be called to set new value)

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);             // updating function called(Expenses gets re-evaluated as well)
    }


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map((expense) => (
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    )                                      // component inside component(wrapper component).
}

export default Expenses;