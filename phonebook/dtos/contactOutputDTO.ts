export class Users {
  id: number | undefined = undefined;
  firstName: String = '';
  lastName: string = '';
  age: number | undefined = undefined;
  gender: string | undefined = undefined;
  phone: number | undefined = undefined;
  image: string | undefined = undefined;
  email: string | undefined = undefined;
}
export class ContactOutputDTO {
  users: Users[] = [];
  total: number | undefined = undefined;
  skip: number | undefined = undefined;
  limit: number | undefined = undefined;
}
