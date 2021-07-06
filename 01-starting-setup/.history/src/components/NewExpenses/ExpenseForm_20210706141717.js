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
                <label>Title</label>
                <input type='text'/>
            </div>
        </div>
    </form>
}

export default ExpenseForm;