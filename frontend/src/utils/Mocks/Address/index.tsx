import { ClientIdentification } from 'utils/Mocks/Identification';
import { IClientAddress ,IAddress } from 'utils/Types/Address';

export const ClientAddress: IClientAddress = {
  Identification: ClientIdentification,
  Cep: '09015-000',
  Address: 'Avenida Quinze de Novembro',
  Number: '100',
  Complement: 'Casa',
  District: 'Centro',
  State: 'São Paulo',
  City: 'Santo André'
};

export const AddressData: IAddress = {
  Legend: 'Endereço do Cliente',
  Inputs: [
    {
      Label: 'CEP',
      Type: 'text',
      Name: 'fieldCep',
      Id: 'fieldCep'
    },
    {
      Label: 'Endereço',
      Type: 'text',
      Name: 'fieldAddress',
      Id: 'fieldAddress'
    },
    {
      Label: 'Número',
      Type: 'text',
      Name: 'fieldNumber',
      Id: 'fieldNumber'
    },
    {
      Label: 'Complemento',
      Type: 'text',
      Name: 'fieldComplement',
      Id: 'fieldComplement'
    },
    {
      Label: 'Bairro',
      Type: 'text',
      Name: 'fieldDistrict',
      Id: 'fieldDistrict'
    },
  ],
  Selects: [
    {
      Label: 'Estado',
      Name: 'fieldState',
      Id: 'fieldState',
    },
    {
      Label: 'Cidade',
      Name: 'fieldCity',
      Id: 'fieldCity',
    }
  ],
  PreviousTextButton: 'Voltar',
  NextTextButton: 'Próximo'
};