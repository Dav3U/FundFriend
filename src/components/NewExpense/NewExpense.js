import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const ExpenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(ExpenseData);
        props.onAddExpense(ExpenseData);
        setShow(false);
    };

    
    const [show, setShow] = useState(false);
  
    const showForm = ()=>{
     setShow(true)
    }

    const hideForm = ()=>{
    setShow(false);
    }

    let display = <button onClick={showForm}> Add new expense</button>;

    if (show===true ){
     display= <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={hideForm} />
     
    }
    // else if (show===false){
    //     display = <button onClick={showForm}> Add new expense</button>;
    // }
    
    return (
        <div className='new-expense'>
           
        {display}

        </div>
    )
}
export default NewExpense;