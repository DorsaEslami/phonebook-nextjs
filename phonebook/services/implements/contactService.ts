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
      var url = 'https://dummyjson.com/auth/login';
      var result = await axios().post<LoginOutputDTO>(url, {
        username: "kminchelle",
        password: "0lelplR"
      });
      return result;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  }

  getContact = async (): Promise<ContactOutputDTO> => {
    try {
      var url = 'https://dummyjson.com/users';
      var result = await axios().get<ContactOutputDTO>(url);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  }

  getFilteredContacts = async (searchValue: string): Promise<ContactOutputDTO> => {
    try {
      var url = 'https://dummyjson.com/users/search?q=' + searchValue;
      var result = await axios().get<ContactOutputDTO>(url);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  }

  deleteContact = async (id: number): Promise<ContactDeleteOutputDTO> => {
    try {
      var url = 'https://dummyjson.com/users/' + id;
      var result = await axios().delete<ContactDeleteOutputDTO>(url);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  };

  postContact = async (data: ContactPostInputDTO): Promise<Users> => {
    try {
      var url = 'https://dummyjson.com/users/add';
      var result = await axios().post<Users>(url, data);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  };

  putContact = async (data: ContactPutInputDTO): Promise<Users> => {
    try {
      var url = 'https://dummyjson.com/users/' + data.id;
      var result = await axios().put<Users>(url, data);
      return result.data;
    } catch (error) {
      throw new Error("Something went wrong while fetching data");
    }
  };
}