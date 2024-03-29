import './ExpenseForm.css';


const ExpenseForm =()=>{
    return <form>
        <div className= "new-expense__controls">
            <div className = "new-expense__controls">
                <label>Title</label>
                <input type='text'/>
            </div>
            <div className = "new-expense__controls">
                <label>Ammount</label>
                <input type='number' min="0.01" step="0.01"/>
            </div>
            <div className = "new-expense__controls">
                <label>Date</label>
                <input type='date' min="2021-01-01" max="2025-01-01"/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;