import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm =()=>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmmount, setEnteredAmmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const ammountChangeHandler = (event) =>{

    }

    const dateChangeHandler = (event) =>{

    }

    return <form>
        <div className= "new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className = "new-expense__control">
                <label>Ammount</label>
                <input type='number' min="0.01" step="0.01" onChange={ammountChangeHandler}/>
            </div>
            <div className = "new-expense__control">
                <label>Date</label>
                <input type='date' min="2021-01-01" max="2025-01-01" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;