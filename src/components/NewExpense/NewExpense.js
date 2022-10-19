import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isAdding, setIsAdding] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);      //child-to-parent component communication(NewExpense-to-App.js)  //onAddExpense is a function received from App Component.
        setIsAdding(false);
    }

    const addNewExpense = () => {
        setIsAdding(true);
    }

    const stopAddingHandler = () => {
        setIsAdding(false);
    }

    return (
        <div className='new-expense'>
            {!isAdding && <button onClick={addNewExpense}>Add New Expense</button>}
            {isAdding && <ExpenseForm onCancel={stopAddingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;