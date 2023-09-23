import { LoginOutputDTO } from "./dtos/loginOutputDTO";

declare module "next-auth" {
  interface User {
    id: number | undefined = undefined;
    username: string = '';
    firstName: string = '';
    lastName: string = '';
    gender: string | undefined = undefined;
    image: string | undefined = undefined;
    email: string | undefined = undefined;
    token: string = ''
  }

  interface Session extends DefaultSession {
    user: User;
  }

}
declare module "next-auth/jwt" {
  interface JWT {
    token: string
  }
}