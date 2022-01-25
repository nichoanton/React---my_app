import React from 'react';                                                    //Adding listeners <select onChange={}>
                                                                              //Calling an event (event.target.value)        
import './ExpensesFilter.css';                                                //Add expensesFilter in Expenses.js 
                                                                              //The changing values my register in <ExpenseFilter> onChangeFilter={}
const ExpensesFilter = (props) => {                                           //Use props to connect mother to child components
  const dropdownChangeHandler = (event) => {                                  //  onChangeFIlter from Expenses.js ---> props.onChangeFilter(event.target.value);
    props.onChangeFilter(event.target.value);                                 //Saving it using 'useState'
  };                                                                          //useState --> const[filteredYear, setFilteredYear] = useState['2020];
                                                                              //TWO-WAY BINDING

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>                    
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;