'use strict';

const loggerMiddleWare = require('../src/middleware/logger');
describe('logger middleware', ()=> {
   
    let consoleSpy; 
    let req = {};
    let res = {};
    let next = jest.fn();
    
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })

    afterEach(()=> {
        // put the console back
        consoleSpy.mockRestore();
    })

    test('properly logs some output', ()=> {
        loggerMiddleWare(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    
    test('moves to the next', ()=> {
        loggerMiddleWare(req, res, next);
        expect(next).toHaveBeenCalled()
    })
})