import './ExpenseDate.css';

function ExpenseDateStripped(props)
{
    const month= props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
     return(
        <div className='strippedDateDiv'>

       <p>{day} {month}, {year}</p>

        </div>
     );
}

export default ExpenseDateStripped;