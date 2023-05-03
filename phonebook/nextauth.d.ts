import { LoginOutputDTO } from "./dtos/loginOutputDTO";

declare module "next-auth" {
  interface User {
    id: number | undefined = undefined;
    token: string
  }

  interface Session extends DefaultSession {
    user: User;
  }

}
declare module "next-auth/jwt" {
  interface JWT {
    id: number | undefined = undefined;
    token: string
  }
}