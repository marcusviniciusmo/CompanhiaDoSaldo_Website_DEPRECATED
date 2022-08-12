import { IClientIdentification} from 'utils/Types/Identification';
import { IInput } from 'utils/Types/Input';

export interface IAddress {
  Legend: string;
  Inputs: IInput[];
  PreviousTextButton: string;
  NextTextButton: string;
};

export interface ICepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export interface ICities {
  id: number;
  nome: string;
  microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
          id: number;
          nome: string;
          UF: IStates;
      };
  };
  'regiao-imediata': {
      id: number;
      nome: string;
      'regiao-intermediaria': {
          id: number;
          nome: string;
          UF: IStates;
      };
  };
};

export interface IClientAddress {
  Identification: IClientIdentification;
  Cep: string;
  Address: string;
  Number: string;
  Complement: string;
  District: string;
};

export interface IRegions {
  id: number;
  sigla: string;
  nome: string;
};

export interface IStates {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegions;
};