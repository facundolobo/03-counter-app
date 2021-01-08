import { getByText, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';

const { default: CounterApp } = require("../../CounterApp")


describe('Pruevas en <CounterApp>', () => {

    let wrapper = shallow (<CounterApp/>);
    
    beforeEach ( () =>{

        wrapper = shallow (<CounterApp/>);

    });

    test(' debe de mostrar <CounterApp /> correctamente', () => {
        
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe msotrar por defecto el valor de 100 ', () => {
       
        const wrapper = shallow (<CounterApp value={100}  />);

            const textoParrafo = wrapper.find('h2').text().trim(); // trim saca los espacios 
            
            expect(textoParrafo).toBe('100');
    })
    test('Debe incrementar con el boton +1 ', () => {
        
       wrapper.find('button').at(0).simulate('click');
 
       const conterText = wrapper.find('h2').text().trim();

       expect(conterText).toBe('11');


    })
    test('Debe decrecrementar con el boton -1 ', () => {
        
        wrapper.find('button').at(2).simulate('click');
  
        const conterText = wrapper.find('h2').text().trim();
 
        expect(conterText).toBe('9');
 
 
     })

     test('Debe de colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow (<CounterApp value={105} />);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const conterText = wrapper.find('h2').text().trim();
 
        console.log(conterText);
        expect(conterText).toBe('105');
 
     })
    
})

