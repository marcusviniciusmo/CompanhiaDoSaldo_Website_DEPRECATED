import { IClientIdentification} from 'utils/Types/Identification';
import { IInput } from 'utils/Types/Input';

export interface IClientAddress {
  Identification: IClientIdentification;
  Cep: string;
  Address: string;
  Number: string;
  Complement: string;
  District: string;
};

export interface IAddress {
  Legend: string;
  Inputs: IInput[];
  PreviousTextButton: string;
  NextTextButton: string;
};