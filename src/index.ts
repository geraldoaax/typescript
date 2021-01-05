 import express, { response } from 'express';

 const app = express(); 

 app.get('/', (request, response) => {
     return response.json({message: 'Hello World!!'});
     console.log('Server is Running!!');
 })

 app.listen(3333); 