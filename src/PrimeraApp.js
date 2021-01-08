
import React, { Fragment } from 'react'; 
import PropTypes from 'prop-types';



const PrimeraApp = ({saludo,subtitulo}) => {
    
    return (
            <>
            
            <h1>{ saludo }!!!</h1>
            {/* <pre>{JSON.stringify(saludo,null,3) }</pre> */}
            <p>{ subtitulo }</p>
             
            </>
            );
        

}
// con esto digo q tiene q venir un string si es que se envia algo
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired 
    
}   
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
    
}   

export default PrimeraApp;