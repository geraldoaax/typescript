import { Request, Response } from 'express';
import createUser from './services/CreateUser';

//string, number, boolean, object, array
//interfaces == define tipagem em objetos ou vetores..
export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'junaobike',
    email: 'coxinha@junao.com.brsn',
    password: 'password',
    techs: [
      'niner',
      'junao',
      'coxinha',
      { title: 'javascript', experience: 300 },

    ]
  });

  console.log(user.name);


  return response.json({ message: 'Hello Coxinha' });
}