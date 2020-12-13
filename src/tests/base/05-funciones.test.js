import { getUser }  from '../../base/05-funciones'
import { getUsuarioActivo }  from '../../base/05-funciones'
import '@testing-library/jest-dom';

describe('pruebas de funciones', () => {
    test('getUser debe retornar un objeto ', () => {
        
        const userTest={
            uid: 'ABC123',
        username: 'El_Papi1502'
        }
        const user=getUser();
        expect(user).toEqual(userTest);

    })
    // get usuario activo debe retornar un objeto
    test('tarea ', () => {
        
        const nombre='facu';
        const user2= getUsuarioActivo(nombre);
        expect(user2.username).toEqual(nombre);



    })
    



})
