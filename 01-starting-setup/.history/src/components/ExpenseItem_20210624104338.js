import './ExpenseItem.css'

function ExpenseItem(){
    const expenseDate = new Date(2021, 6, 24);
    const expenseTitle = "Rent";
    const expenseAmmount = 285;
    return (
        <div className="expense-item">
             <h2>{expenseDate.toString()}</h2>
             <div className='expense-item__description'>
                 <h2>{expenseTitle}</h2>
                 <div className='expense-item__price'>${expenseAmmount}</div>
             </div>
        </div>
       
    );
}

export default ExpenseItem;