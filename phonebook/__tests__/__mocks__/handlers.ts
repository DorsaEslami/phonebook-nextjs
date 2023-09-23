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
  ];

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
  ];

export const contactsHandlers: HandlerConfig[] =
  [
    {
      path: 'https://dummyjson.com/users/search?q=2',
      method: 'get',
      res: (req, res, ctx) => {
        return (
          ctx.status(200),
          ctx.json({
            "users": [
              {
                "id": 50,
                "firstName": "Sheldon",
                "lastName": "Quigley",
              }
            ],
            "total": 1,
            "skip": 0,
            "limit": 1
          }
          )
        )
      },
    },
    {
      path: 'https://dummyjson.com/users',
      method: 'delete',
      res: (req, res, ctx) => {
        return (
          ctx.status(200),
          ctx.json({
            "id": 1,
            "firstName": "Terry",
            "lastName": "Medhurst",
            "maidenName": "Smitham",
            "age": 50,
            "gender": "male",
            "isDeleted": true,
          }
          )
        )
      },
    },
    {
      path: 'https://dummyjson.com/users/add',
      method: 'post',
      res: (req, res, ctx) => {
        return (
          ctx.status(200),
          ctx.json({
            "id": 101,
            "firstName": "Muhammad",
            "lastName": "Ovi",
            "age": 250,
          }
          )
        )
      },
    },
    {
      path: 'https://dummyjson.com/users/',
      method: 'put',
      res: (req, res, ctx) => {
        return (
          ctx.status(200),
          ctx.json({
            "id": "1",
            "firstName": "Terry",
            "lastName": "Owais",
            "email": "atuny0@sohu.com",
            "phone": "+63 791 675 8914",
            "gender": "male",
          }

          )
        )
      },
    },
  ];


