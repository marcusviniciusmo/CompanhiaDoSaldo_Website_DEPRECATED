import { IAddress } from 'utils/Types/Address';

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
  PreviousTextButton: 'Voltar',
  NextTextButton: 'Próximo'
};