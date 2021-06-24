import './ExpenseItem.css'

function ExpenseItem(){
    return (
        <div className="">
             <h2>24 Jun, 2021</h2>
             <div className='expense-item__description'>
                 <h2>Rent</h2>
                 <div className='expense-item__price'>285</div>
             </div>
        </div>
       
    );
}

export default ExpenseItem;