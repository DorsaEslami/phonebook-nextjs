import { HandlerConfig } from "../__utils__/server";
import { contactsList } from './fakeData/contacts'
import { LoginOutput } from "./fakeData/loginOutput";



export const SuccessfulLogin: HandlerConfig[] =
  [
    {
      path: 'https://dummyjson.com/auth/login',
      method: 'post',
      res: (req, res, ctx) => {
        return (
          ctx.status(200),
          ctx.json(LoginOutput)
        )
      },
    }
  ]

export const getContact: HandlerConfig[] =
  [
    {
      path: 'https://dummyjson.com/users',
      method: 'get',
      res: (req, res, ctx) => {
        return (
          ctx.status(200),
          ctx.json(contactsList.users)
        )
      },
    }
  ]

