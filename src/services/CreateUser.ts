/**
 Para criar name, email, password
 */

interface TechOjbects {
  title: string,
  experience: number
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechOjbects>
}

export default function createUser({ name, password, email }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}
