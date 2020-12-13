import React from 'react'; 

import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


//const saludo= <h1>Hola mundo</h1>;

const divRoot=document.querySelector('#root');

//ReactDOM.render(<PrimeraApp saludo="facundo"/>  ,divRoot);

ReactDOM.render(<CounterApp value={10}/>  ,divRoot);