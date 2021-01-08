import { getByText, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'


const { default: PrimeraApp } = require("../../PrimeraApp")


describe('Pruevas en <PrimeroApp>', () => {
    // test('debe mostrar el mensaje "Hola, soy Goku"',()=> {
        

    //     const saludo ="Hola, soy Goku"
    //     const {getByText} = render (<PrimeraApp saludo= {saludo}/>)
        
    //     expect (getByText (saludo)).toBeInTheDocument();


    //     })
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow (<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Goku';
        const subTitulo= 'Soy un subtitulo';
        
        const wrapper = shallow (
        <PrimeraApp 
        saludo={saludo} 
        subtitulo={subTitulo}
        />
        );
        
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subTitulo);

    })
    
    
    }) 

