import { ContactOutputDTO, Users } from "@/dtos/contactOutputDTO";
import { ContactDeleteOutputDTO } from '@/dtos/contactDeleteOutputDTO';
import { ContactPostInputDTO } from "@/dtos/contactPostInputDTO";
import { ContactPutInputDTO } from "@/dtos/ContactPutInputDTO";
import { LoginOutputDTO } from "@/dtos/loginOutputDTO";
import { APIResultDTO } from "@/dtos/apiResultDTO";


export interface IContactService {
  login: () => Promise<APIResultDTO<LoginOutputDTO>>;
  getContact: () => Promise<APIResultDTO<ContactOutputDTO>>;
  getFilteredContacts: (searchValue: string) => Promise<APIResultDTO<ContactOutputDTO>>;
  deleteContact: (id: number) => Promise<APIResultDTO<ContactDeleteOutputDTO>>;
  postContact: (data: ContactPostInputDTO) => Promise<APIResultDTO<Users>>;
  putContact: (data: ContactPutInputDTO) => Promise<APIResultDTO<Users>>;
}