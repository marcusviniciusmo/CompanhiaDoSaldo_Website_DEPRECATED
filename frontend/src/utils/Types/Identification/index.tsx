import { IInput } from 'utils/Types/Input';

export interface IClient {
  Cpf: string;
  Phone: string;
  Name: string;
  Email: string;
  Gender: string;
  Birthday: string;
};

export interface IIdentification {
  Legend: string;
  SubLegend: string;
  Inputs: IInput[];
};