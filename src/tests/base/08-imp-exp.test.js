const { getHeroeById , getHeroesByOwner } = require("../../base/08-imp-exp");
import heroes from '../../data/heroes.js';
import '@testing-library/jest-dom';

describe('Pruebas en funciones de Heroes', () => {
    test('debe de retornar un heroe por Id ', () => {
        const id=1;
        const heroe=getHeroeById(id);
        
        const heroesData = heroes.find (h => h.id === id);

         expect (heroe).toEqual(heroesData)
    
    })
    test('debe de retornar un undefine si Héroe no existe ', () => {
        const id=10;
        const heroe=getHeroeById(id);
        
        //const heroesData = heroes.find (h => h.id === id);

         expect (heroe).toBe(undefined)
    
    })
})
describe('Tarea', () => {
        test('debe de retornar un heroe por Id ', () => {
            const owner='DC';
            const heroe=getHeroesByOwner(owner);
            
            const heroesData = heroes.filter (h => h.owner === owner);
    
            expect (heroe).toEqual(heroesData);
        
        })
        test('debe de retornar un heroe por Ida ', () => {
            const owner='Marvel';
            const heroe=getHeroesByOwner(owner);
            
            
    
            expect (heroe.length).toBe(2);
            
        })
        
})
        
