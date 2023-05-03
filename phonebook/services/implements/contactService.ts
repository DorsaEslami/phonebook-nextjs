import axios from '../axios';
import { injectable } from "inversify";
import { ContactOutputDTO, Users } from '@/dtos/contactOutputDTO';
import { IContactService } from '../interfaces/IContactService';
import "reflect-metadata";
import { ContactDeleteOutputDTO } from '@/dtos/contactDeleteOutputDTO';
import { ContactPostInputDTO } from '@/dtos/contactPostInputDTO';
import { ContactPutInputDTO } from '@/dtos/ContactPutInputDTO';
import { LoginOutputDTO } from '@/dtos/loginOutputDTO';
import { APIResultDTO } from '@/dtos/apiResultDTO';


@injectable()
export class ContactService implements IContactService {
  login = async (): Promise<APIResultDTO<LoginOutputDTO>> => {
    try {
      // var url = 'https://fakestoreapi.com/auth/login';
      // var result = await axios.post<APIResultDTO<LoginOutputDTO>>(url, {
      //   username: "mor_2314",
      //   password: "83r5^_"
      // });
      var result: APIResultDTO<LoginOutputDTO> = {
        data: {
          id: 1,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
        },
        status: 200,
        statusText: undefined,
        headers: undefined,
        config: undefined,
      };
      return result;
    } catch (error) {
      throw new Error('Something went wrong while fetching data!Try again in a few seconds please.');
    }
  }

  getContact = async (): Promise<APIResultDTO<ContactOutputDTO>> => {
    try {
      var url = 'https://dummyjson.com/users';
      var result = await axios.get<APIResultDTO<ContactOutputDTO>>(url);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  }

  getFilteredContacts = async (searchValue: string): Promise<APIResultDTO<ContactOutputDTO>> => {
    try {
      var url = 'https://dummyjson.com/users/search?q=' + searchValue;
      var result = await axios.get<APIResultDTO<ContactOutputDTO>>(url);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  }

  deleteContact = async (id: number): Promise<APIResultDTO<ContactDeleteOutputDTO>> => {
    try {
      var url = 'https://dummyjson.com/users/' + id;
      var result = await axios.delete<APIResultDTO<ContactDeleteOutputDTO>>(url);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  };

  postContact = async (data: ContactPostInputDTO): Promise<APIResultDTO<Users>> => {
    try {
      var url = 'https://dummyjson.com/users/add';
      var result = await axios.post<APIResultDTO<Users>>(url, data);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  };

  putContact = async (data: ContactPutInputDTO): Promise<APIResultDTO<Users>> => {
    try {
      var url = 'https://dummyjson.com/users/' + data.id;
      var result = await axios.put<APIResultDTO<Users>>(url, data);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  };
}