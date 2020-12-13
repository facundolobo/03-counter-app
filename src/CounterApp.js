import React2, { Fragment } from 'react'; 
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CounterApp = ({value = 10}) => {
    
    const [counter,setCounter]= useState(value);
    
    
    
    
    //handAdd
    const handleAdd = () =>{
        setCounter(counter + 1 );
        //setCounter( (counter) => counter + 1 );
    }

    const handleRest = () =>{
        setCounter(counter - 1 );
        //setCounter( (counter) => counter + 1 );
    }
    const handleReset = () =>{
        setCounter(value);
        //setCounter( (counter) => counter + 1 );
    }
    
    return (
            <>
            
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd } >+1</button>
            
            
            <button onClick={ handleReset } >Resetear</button>
            
            <button onClick={ handleRest } >-1</button>
            
            </>
            );
      
}

CounterApp.propTypes = {
    value: PropTypes.number
    
}   
export default CounterApp;