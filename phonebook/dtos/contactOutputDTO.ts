export class Users {
  id: number | undefined = undefined;
  firstName: string = '';
  lastName: string = '';
  age: number | undefined = undefined;
  gender: string | undefined = undefined;
  phone: string | undefined = undefined;
  image: string | undefined = undefined;
  email: string | undefined = undefined;
}
export class ContactOutputDTO {
  users: Users[] = [];
  total: number | undefined = undefined;
  skip: number | undefined = undefined;
  limit: number | undefined = undefined;
}
