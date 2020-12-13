import {getSaludo} from "../../base/02-template-string";
import '@testing-library/jest-dom';
describe('Pruebas en 02-template-string.js', () => {
    test('pueba en el metodo getSaludo ', () => {
        
        const nombre='Fernando';
        const saludo=getSaludo(nombre);
        
        expect(saludo).toBe('Hola ' + nombre);
        
    
    })
    // debe regresar hola Carlos si no tiene argumentos
    test('pueba en el metodo getSaludo hola Carlos ', () => {
        
        //const nombre='Fernando';
        const saludo=getSaludo();
        
        expect(saludo).toBe('Hola Carlos');
        
    
    })

    
})
