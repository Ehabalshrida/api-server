'use strict';
const {app} = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { db } = require('../src/models/index');
// before any of the test create a connection
beforeAll(async () => {
    await db.sync();
  });
  // after all the tests are done
afterAll(async () => {
    await db.drop();
  });
  
describe('my API Server', ()=> {

    test('handles not found request', async () => {
        // test for bad rout 
        const response = await request.get('/demo'); 
        expect(response.status).toEqual(404);
    });

    test('handles not found request', async () => {
        // test for bad methode
        const response = await request.post('/person'); 
        expect(response.status).toEqual(404);});

        //Create a record using POST

        it('can add a food', async () => {

            const response = await request.post('/food').send({
                typeOffood: 'orange',
                numberOfeaters: '100'
            });
        
            expect(response.status).toBe(201);
        
          });
        //Read a list of records using GET
        test('read all foods', async () => {
            const response = await request.get('/food'); 
            expect(response.status).toEqual(200);
        });
       // Read a record using GET
       test('read one food', async () => {
        const response = await request.get('/food/1'); 
        expect(response.status).toEqual(200)});

     // Update a record using PUT
     test('update one food', async () => {
        const response = await request.put('/food/1'); 
        expect(response.status).toEqual(201)});

     // Destroy a record using DELETE
     test('delete one food', async () => {
        const response = await request.delete('/food/1'); 
        expect(response.status).toEqual(204)});


    });