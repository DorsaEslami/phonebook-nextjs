import { ContactOutputDTO, Users } from "@/dtos/contactOutputDTO";
import { ContactDeleteOutputDTO } from '@/dtos/contactDeleteOutputDTO';
import { ContactPostInputDTO } from "@/dtos/contactPostInputDTO";
import { ContactPutInputDTO } from "@/dtos/ContactPutInputDTO";
import { LoginOutputDTO } from "@/dtos/loginOutputDTO";
import { APIResultDTO } from "@/dtos/apiResultDTO";


export interface IContactService {
  login: () => Promise<APIResultDTO<LoginOutputDTO>>;
  getContact: () => Promise<ContactOutputDTO>;
  getFilteredContacts: (searchValue: string) => Promise<ContactOutputDTO>;
  deleteContact: (id: number) => Promise<ContactDeleteOutputDTO>;
  postContact: (data: ContactPostInputDTO) => Promise<Users>;
  putContact: (data: ContactPutInputDTO) => Promise<Users>;
}